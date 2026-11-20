---
title: Gören Göz
summary: Görme engelli kullanıcı için telefon kamerasından engel ve mesafe bulan, sesle uyaran yardımcı. YOLO, MiDaS derinlik ve VLM birlikte çalışır.
tags: [YOLO, VLM, Mobil]
role: Tek geliştirici (mobil uygulama, servis, model entegrasyonu)
year: 2025
stack: [Flutter, FastAPI, YOLOv11, MiDaS, SmolVLM, OpenVINO]
metrics:
  - label: Kare başına analiz
    value: "~210 ms"
    note: CPU (Intel i5-1334U), derinlik + tespit
  - label: Hızlanma
    value: "%16"
    note: Zemin analizi kaldırılınca 250 ms → 210 ms
  - label: Akış hızı
    value: "4,7 FPS"
    note: Önce 4 FPS
motif: tespit
compare:
  before: ../../assets/projects/goren-goz-sema-sahne.svg
  after: ../../assets/projects/goren-goz-sema-cikti.svg
  beforeLabel: Kamera karesi
  afterLabel: Derinlik + tespit
  beforeAlt: "Şematik kamera karesi: koridor, ortada uzakta bir insan, sağda yakında bir direk, solda yakında bir bank."
  afterAlt: "Şematik çıktı: koyu renkle yakın bölgeleri gösteren derinlik haritası; insan, yakın direk ve yakın bank için üç tespit kutusu."
  caption: "Şematik çizim: sistemin ürettiği katmanları anlatır, gerçek kamera çıktısı değildir. Gerçek kare ve çıktı çifti eklenince bu çizim kaldırılacak."
learned:
  - Ölçmeden optimize etmedim. Zemin analizinin 50–100 ms yediğini günlükten görünce kaldırdım.
  - OpenVINO dönüşümü ilk denemede başarısız oldu. Servis PyTorch'a otomatik düşecek biçimde yazıldığı için uygulama çalışmaya devam etti.
  - Görme engelli kullanıcı için uyarı sayısı da bir tasarım kararı. Her karede konuşan sistem kısa sürede gürültüye döner.
repo: https://github.com/rose-omer/goren_goz_mobil.app
featured: true
order: 1
---

## Problem

Görme engelli bir kişi bastonla yerdeki engeli bulur. Göğüs ve baş hizasındaki direk, tabela ya da açık kapıyı bastonla bulamaz. Gören Göz telefon kamerasıyla önü tarar, yakındaki engeli sesle bildirir.

## Veri

Tespit için hazır YOLOv11 ağırlıklarını kullandım. Derinlik için tek kameradan derinlik tahmin eden MiDaS (small) modelini kullandım. Bu projede yeni model eğitmedim. Odak, hazır modelleri telefon + sunucu düzeninde hızlı ve güvenilir çalıştırmaktı.

## Yaklaşım

- Flutter uygulaması kareyi FastAPI servisine gönderir.
- Servis aynı karede derinlik haritasını ve nesne kutularını üretir. Her kutunun derinliğinden yakınlık sınıfı çıkar: güvenli, yakın, tehlike.
- Uyarı servisi yakın ve tehlikeli engeli sesli mesaja çevirir.
- Kullanıcı "Önümde ne var?" diye sorabilir. Bu soruda kare, tespit sonuçlarıyla birlikte yerel bir görsel-dil modeline (SmolVLM, Ollama üzerinden) gider ve Türkçe yanıt döner.

## Sonuç

CPU üzerinde (Intel i5-1334U) kare başına analiz ortalama 210 ms sürüyor. Zemin analizini çıkarınca ortalama 250 ms'den 210 ms'ye indi, akış 4 FPS'den 4,7 FPS'ye çıktı. Ölçümler projenin performans raporundaki 10 ardışık istekten alındı.
