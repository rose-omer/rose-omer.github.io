---
title: Kişilik ve ilişki testi
summary: 16 soruluk görselli testten kişilik ve çift uyumu analizi üreten Flask uygulaması. Analizi Gemini yapar.
tags: [LLM, Web]
role: Stajyer geliştirici (Emar Proje)
year: 2025
stack: [Python, Flask, Jinja2, Gemini API, Render]
metrics:
  - label: Soru
    value: "16"
    note: Görselli ve metin tabanlı
  - label: Mod
    value: "2"
    note: Tekli ve çift
motif: metin
learned:
  - Dil modelinden tutarlı sonuç almak için yanıtları serbest metin yerine sabit bir yapıda istemek gerekti.
repo: https://github.com/rose-omer/Personality-and-Relationship
demo: https://personality-and-relationship.onrender.com
demoNote: Ücretsiz sunucu uykuda olabilir; ilk açılış ~1 dk sürer.
order: 5
---

## Problem

Kişilik testleri çoğu zaman puanı verip bırakır. Bu uygulama yanıtları yorumlayan bir metin üretir. İki kişinin yanıtlarını karşılaştırıp ilişki uyumunu da analiz eder.

## Yaklaşım

- Tekli modda kullanıcı 16 soruyu yanıtlar ve kişilik değerlendirmesi alır.
- Çift modunda iki kullanıcı ayrı ayrı yanıtlar. Uygulama ikinci kişiyi bekler ve iki yanıt setini karşılaştırır.
- Yanıtlar Gemini API'ye yapılandırılmış istemle gider. Sonuç sayfası analizi gösterir.

## Sonuç

Uygulama Render üzerinde yayında. Emar Proje'deki yapay zekâ stajımda geliştirdim.
