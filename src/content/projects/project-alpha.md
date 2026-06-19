---
title: "Project Alpha"
description: "REST API yang berevolusi menjadi event-driven architecture di tengah jalan."
stack: ["Go", "PostgreSQL", "Redis", "Docker"]
repoUrl: "https://github.com/terces/project-alpha"
status: "archived"
featured: true
startDate: 2025-09-01
endDate: 2026-01-15
order: 2
---

Ini proyek yang paling banyak mengajarkan saya tentang keputusan arsitektur.

Awalnya REST biasa. Tapi di bulan ketiga, ada requirement baru: beberapa service perlu tahu ketika suatu event terjadi, tanpa polling terus-menerus. Pilihan: tambah webhook (messy), atau pivot ke event-driven.

Saya pivot. Dan itu mempengaruhi hampir semua yang sudah dibangun sebelumnya.

Pelajaran: desain untuk extensibility dari awal, atau siap-siap refactor besar-besaran.
