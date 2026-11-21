---
title: Stajyer Asistanı
summary: Staj başvurusunu kolaylaştıran web uygulaması. Gemini şirketi analiz eder ve kişiye özel başvuru e-postası taslağı yazar.
tags: [LLM, Web]
role: Tek geliştirici
year: 2025
stack: [React, Vite, TypeScript, Gemini API, Google Apps Script]
motif: arayuz
learned:
  - Tarayıcıda tutulan gönderim kaydı, aynı şirkete ikinci kez yazmayı engelleyen basit ama etkili bir önlem oldu.
repo: https://github.com/rose-omer/stajyer-asistani
order: 8
---

## Problem

Staj başvurusu için her şirkete ayrı, şirketi tanıyan bir e-posta yazmak uzun sürer.

## Yaklaşım

- Gemini şirketin sektörünü ve odak alanlarını özetler.
- Bu özetten şirkete özel başvuru metni üretilir. CV dosyası e-postaya eklenir.
- Gönderim, kullanıcının kendi Gmail hesabından Google Apps Script ile yapılır.
- Gönderilen şirketler tarayıcıda saklanır; aynı şirkete tekrar gönderim engellenir.

## Sonuç

React + TypeScript ile yazılmış, sunucusu olmayan bir uygulama. Yapay zekâ yalnız taslak üretir; gönderim kullanıcının hesabından yapılır.
