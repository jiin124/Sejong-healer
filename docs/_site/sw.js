const version = '20221205113156';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/Sejong-healer/general/2016/08/29/example-post-three/","/Sejong-healer/history/external%20sources/2016/08/28/example-post-two/","/Sejong-healer/general/external%20sources/2016/08/27/example-post-one/","/Sejong-healer/about/","/Sejong-healer/categories/","/Sejong-healer/community/","/Sejong-healer/contact/","/Sejong-healer/elements/","/Sejong-healer/features/","/Sejong-healer/blog/","/Sejong-healer/","/Sejong-healer/manifest.json","/Sejong-healer/offline/","/Sejong-healer/assets/search.json","/Sejong-healer/search/","/Sejong-healer/assets/styles.css","/Sejong-healer/thanks/","/Sejong-healer/redirects.json","/Sejong-healer/blog/page2/","/Sejong-healer/feed.xml","/Sejong-healer/sitemap.xml","/Sejong-healer/robots.txt","/Sejong-healer/assets/styles.css.map","/Sejong-healer/assets/logos/title_logo.png", "/Sejong-healer/assets/default-offline-image.png", "/Sejong-healer/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/Sejong-healer/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
