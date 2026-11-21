---
title: Cilt lezyonu sınıflandırma
summary: Dermatoskopik görüntüyü iyi huylu ya da kötü huylu olarak sınıflandıran model. Xception öznitelikleri üzerine XGBoost ile 0,88 doğruluk.
tags: [Görüntü, ML]
role: Tek geliştirici
year: 2025
stack: [TensorFlow / Keras, Xception, XGBoost, scikit-learn]
metrics:
  - label: Doğruluk
    value: "0,88"
    note: Xception + XGBoost, 528 görüntülük ayrılmış küme
  - label: Makro F1
    value: "0,88"
    note: Aynı küme; iyi huylu 0,88, kötü huylu 0,87
  - label: Yalnız Xception
    value: "0,82"
    note: Test kümesi doğruluğu, 660 görüntü
motif: siniflandirma
learned:
  - Transfer öğrenmeyle çıkarılan öznitelikleri ayrı bir sınıflandırıcıya vermek, uçtan uca ince ayardan daha hızlı sonuç verdi.
  - Tıbbi sınıflandırmada doğruluk tek başına yetmez. Kötü huylu sınıfta duyarlılık (0,90) daha önemli bir ölçü.
  - Model klinik olarak doğrulanmadı. Sonuçlar yalnız bu veri setindeki performansı gösterir.
repo: https://github.com/rose-omer/Skin-Cancer-Classification
featured: true
order: 2
---

## Problem

Cilt kanserinde erken teşhis sonucu değiştirir. Dermatoskopik görüntüde iyi ve kötü huylu lezyon arasındaki fark küçüktür. Amaç, hekime ikinci görüş veren bir karar destek modeli denemekti.

## Veri

Kaggle'daki "Skin Cancer: Malignant vs. Benign" veri setini kullandım. İki sınıf var: iyi huylu (benign) ve kötü huylu (malignant). Veri seti boyutu nedeniyle depoya konmadı; bağlantısı README'de.

## Yaklaşım

- ImageNet ile ön eğitilmiş Xception ağını öznitelik çıkarıcı olarak kullandım. Üzerine sınıflandırma katmanı ekleyip 50 dönem eğittim.
- İkinci yolda Xception'ın çıkardığı öznitelikleri XGBoost'a verdim.
- İki yolu aynı metriklerle karşılaştırdım: doğruluk, sınıf başına kesinlik, duyarlılık ve F1.

## Sonuç

Xception tek başına 660 görüntülük test kümesinde 0,82 doğruluğa ulaştı. Xception + XGBoost birleşimi 528 görüntülük ayrılmış kümede 0,88 doğruluk ve 0,88 makro F1 verdi. Kötü huylu sınıfta duyarlılık 0,90, kesinlik 0,85.
