---
title: "Kenapa Saya Akhirnya Pindah ke Astro"
description: "Next.js terlalu berat untuk apa yang saya butuhkan. Ini keputusan, bukan tren."
publishDate: 2026-06-10
tags: ["astro", "web", "opini"]
draft: false
---

Sudah setahun lebih saya pakai Next.js untuk setiap proyek web personal. Sampai akhirnya saya sadar — saya sedang membawa excavator untuk menanam bunga.

## Masalahnya bukan Next.js

Next.js bukan framework yang buruk. Tapi ketika saya duduk dan jujur soal apa yang saya butuhkan dari sebuah blog personal, jawabannya sederhana: **HTML statis yang cepat, Markdown yang enak ditulis, dan CSS yang tidak berantem dengan toolchain.**

Bukan edge runtime. Bukan React Server Components. Bukan App Router.

## Yang berubah setelah pindah

Build time turun dari ~45 detik ke ~4 detik. Lighthouse score naik dari 78 ke 98 tanpa optimasi apapun. Dan yang paling penting — saya tidak perlu buka dokumentasi setiap kali mau tambah halaman baru.

```bash
# Cukup bikin file .astro, dan dia ada di routing
src/pages/about.astro → /about
```

Sesederhana itu.

## Tradeoff yang saya terima

Interaktivitas lebih terbatas tanpa React. Tapi untuk blog seperti ini, satu script vanilla JS sudah cukup untuk musik player, nav indicator, dan scroll animations. Tidak perlu hydration, tidak perlu bundle besar.

Persona 3 punya filosofi yang pas untuk ini: *"The answer is already there — you just have to look."*
