---
title: Sketch-to-Code AI
summary: El çizimi arayüz taslağını HTML/CSS koduna çeviren araç. OpenCV ön işleme ve Gemini görsel-dil modeli birlikte çalışır.
tags: [VLM, Web]
role: Tek geliştirici
year: 2025
stack: [Python, Streamlit, OpenCV, Gemini 2.5 Flash, scikit-learn]
metrics:
  - label: Stil sürümü
    value: "3"
    note: Aynı taslaktan tek tıkla üç farklı tasarım
  - label: Çıktı çerçevesi
    value: "3"
    note: Tailwind CSS, Bootstrap 5, sade CSS
  - label: Önizleme
    value: "3 cihaz"
    note: 1920, 768 ve 375 px genişlik
cover: ../../assets/projects/sketch-surumler.png
coverAlt: "Sketch-to-Code AI ekranı: aynı taslaktan üretilen Modern Minimal, Klasik Zarif ve Yaratıcı Cesur sürümleri yan yana."
motif: arayuz
gallery:
  - src: ../../assets/projects/sketch-anaekran.png
    alt: "Ana ekran: sol panelde API anahtarı, CSS çerçevesi ve renk paleti seçimi; ortada taslak yükleme alanı."
    caption: Taslak yükleme ekranı. Birden fazla sayfa çizimi aynı anda yüklenebilir.
  - src: ../../assets/projects/sketch-cihaz.png
    alt: "Cihaz önizleme sekmesi: üretilen sayfa masaüstü görünümünde; tablet ve mobil seçenekleri üstte."
    caption: Üretilen sayfa üç cihaz genişliğinde denenebilir.
learned:
  - Ham fotoğraf yerine eşiklenmiş görüntü vermek, modelin çizgileri kutu ve metin alanı olarak okumasını kolaylaştırdı.
  - Görsel-dil modelinden tutarlı kod almak için istem (prompt) şablonunu çerçeveye göre ayırmak gerekti.
repo: https://github.com/rose-omer/Sketch-to-Code-AI
featured: true
order: 3
---

## Problem

Bir arayüz fikri çoğu zaman kâğıtta başlar. Taslaktan çalışan ilk sayfaya geçmek, özellikle tasarımcı olmayan biri için saatler alır. Bu araç o ilk adımı dakikalara indirir.

## Veri

Model eğitmedim. Girdi, kullanıcının yüklediği el çizimi wireframe fotoğrafıdır. Çıktı, seçilen CSS çerçevesinde tek dosyalık HTML'dir.

## Yaklaşım

- OpenCV görüntüyü gri tona çevirir ve uyarlamalı eşikleme uygular. Çizgiler belirginleşir, kâğıt gölgesi kaybolur.
- K-means kümeleme görselden beş baskın renk çıkarır. Bu renkler istenirse tasarıma aktarılır.
- Gemini 2.5 Flash, işlenmiş görüntüden ve çerçeveye özel istemden kodu üretir.
- Arayüz dört sekmedir: yeni tasarım, sürüm karşılaştırma, cihaz önizleme ve geçmiş. Çıktı HTML, ZIP ya da React bileşeni olarak indirilebilir.

## Sonuç

Bir taslaktan üç stil sürümü aynı anda üretilir ve yan yana karşılaştırılır. Üretilen sayfa üç cihaz genişliğinde önizlenir. Çıktıya meta etiketleri, Open Graph ve temel erişilebilirlik nitelikleri tek tıkla eklenir.
