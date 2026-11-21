---
title: SpamMailD
summary: E-postayı spam, zararlı ek, başlık-gövde tutarsızlığı ve SPF/DKIM/DMARC açısından denetleyen çok katmanlı analiz servisi.
tags: [ML, Veri]
role: Stajyer geliştirici (Emar Proje)
year: 2025
stack: [Python, Flask, scikit-learn, NLTK, ClamAV, Docker]
metrics:
  - label: Dil
    value: "2"
    note: Türkçe ve İngilizce için ayrı model
motif: metin
learned:
  - Tek bir sınıflandırıcı yerine bağımsız denetim katmanları, kullanıcıya "neden spam" sorusunun yanıtını verdi.
repo: https://github.com/rose-omer/Spam-Mail-Detection
order: 7
---

## Problem

Spam filtresi çoğu zaman yalnız içerik metnine bakar. Sahte gönderen, zararlı ek ve tutarsız başlık gözden kaçar.

## Yaklaşım

- İçerik: TF-IDF + SVM. Türkçe ve İngilizce için ayrı model ve vektörleştirici.
- Kimlik: SPF, DKIM ve DMARC denetimi.
- Ek dosya: ClamAV taraması ve VirusTotal sorgusu.
- Servis Flask API olarak çalışır. IMAP istemcisi son e-postayı çekip servise gönderir.

## Sonuç

Her e-posta için hangi katmanın neden alarm verdiğini gösteren bir rapor üretilir. Servis Docker imajıyla kurulur.
