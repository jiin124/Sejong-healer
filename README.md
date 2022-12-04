# 🌿Sejong-Healer🌿
Psychological counseling chatbot for Sejong University students.  
Documentation is available on Read the Docs: https://sejong-healer.readthedocs.io/en/latest/

## Naming and branding of the proposed project
🌿Sejong Healer🌿

![image](https://user-images.githubusercontent.com/72074338/205481122-d85a4bbf-0822-4bf9-b7fd-d6fd1c137e4d.png)

## Problem Statement
As COVID-19 is prolonged, the "COVID-19 Blue" phenomenon, which feels depressed, is spreading. In particular, young people in their 20s and 30s are reaching a level that threatens normal life. According to a recent COVID-19 national mental health survey released by the Ministry of Health and Welfare in the first quarter of 2021, the proportion of depression risk groups in their 20s and 30s is more than twice as high as those in their 20s and 30s and 60s (14.4%), respectively, indicating that young people are more negatively affected by COVID-19.   

In particular, more than half of college students think their lives are not happy, and their happiness index is 53.3 points on average based on 100 points. According to Albamon's survey of 989 male and female college students on the "Happiness Index & Stress Index," college students themselves scored 53.3 points on average out of 100.

## Mission Statement
However, college students are reluctant to consult with psychiatricians because they are busy, fearing that medical records will remain and affect their future employment.  
Therefore, we are trying to come up with a way to comfort the mind by creating a psychological counseling chatbot.

## Features List
- Talk about what you want to consult through this chat.
- Then, the AI chatbot sends a reply appropriate to the consultation.

## Target Development Language
- Lang : Python 3.6
- IDE/CodeEditor : VScode
- Tool : streamlit, streamlit-chat, sentence-transformers

## Pretrained Model
SentenceBERT [jhgan/ko-sroberta-multitask](https://huggingface.co/jhgan/ko-sroberta-multitask)

## Dataset
웰니스 대화 스크립트 데이터셋

## Contributor
- 20011802 이빈
- 20011818 정소윤
- 20011821 박지인
- 20011826 김민정

## Connect method
After opening the visual studio code terminal

```
cd "healer chatbot"
streamlit run chatbot.py
```

There may be additional files that need to be installed.
