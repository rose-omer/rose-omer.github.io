---
title: cs-klip
summary: CS2 maç demolarından en iyi anları bulup puanlayan, otomatik .mp4 klip kaydeden ve yerel maç analizi sunan araç.
tags: [Veri, Web]
role: Tek geliştirici
year: 2026
stack: [Python, demoparser2, FFmpeg, PostgreSQL, CS Demo Manager]
metrics:
  - label: Otomatik test
    value: "150+"
  - label: Demo biçimi
    value: "4"
    note: .dem, .dem.zst, .gz, .bz2
cover: ../../assets/projects/cs-clip-mac-ozeti.png
coverAlt: "cs-klip maç özeti ekranı: skor 13–3, oyuncu rating, ADR, KAST ve çoklu kill kutuları."
motif: akis
gallery:
  - src: ../../assets/projects/cs-clip-skor-tablosu.png
    alt: "Skor tablosu: iki takımın oyuncuları; K, D, A, ADR, HS yüzdesi, KAST ve rating sütunları."
    caption: Skor tablosu demo dosyasından hesaplanır.
  - src: ../../assets/projects/cs-clip-klipler.png
    alt: "Klipler sekmesi: puanlanmış anlar ve sayfa içinde oynatılan kayıtlar."
    caption: Seçilen anlar CS2 içinde kaydedilip sayfada oynatılır.
learned:
  - Bir aracı başkasının bilgisayarında çalıştırmak, aracı yazmaktan zor. Tek tıkla kurulum ve kayıt öncesi denetimler bu yüzden var.
  - Bozuk demo CS2'yi çökertiyordu. Demoyu onaran küçük bir yeniden yazıcı, uzun bir hata ayıklama sürecini kapattı.
repo: https://github.com/rose-omer/cs-clip
order: 4
---

## Problem

Bir maçın en iyi anlarını bulmak için demoyu baştan izlemek gerekir. Kaydı almak ve kurgulamak saatler sürer.

## Veri

Girdi, oyuncunun kendi maç demolarıdır. demoparser2 kill, round ve oyuncu durumlarını çıkarır.

## Yaklaşım

- Çoklu kill, clutch, headshot, duvar arkası vuruş gibi olaylar puanlanır, en iyi anlar seçilir.
- CS Demo Manager demoyu CS2'de bir kez açar ve seçilen anları kaydeder. FFmpeg parçaları birleştirir ve montaj yapar.
- Yerel arayüz rating, ADR, KAST, skor tablosu, round geçmişi ve silah dağılımını gösterir.

## Sonuç

Bir demodan adlandırılmış klipler ve bir montaj çıkar. Kayıt öncesi denetimler, takılan CS2 için süre sınırı ve bozuk demo onarımı kaydı güvenilir kılar. Depoda 150'den fazla otomatik test var.
