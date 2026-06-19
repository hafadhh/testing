---
title: "Setup Reverse Proxy Pertama — Lebih Ribet dari yang Dikira"
description: "Nginx, SSL, dan beberapa jam bingung. Catatan supaya saya tidak mengulang kebodohan yang sama."
publishDate: 2026-06-15
tags: ["devops", "nginx", "catatan"]
draft: false
---

Saya pikir setup reverse proxy itu tinggal copy-paste config dari StackOverflow. Saya salah.

## Yang tidak diajarkan tutorial

Tutorial biasanya kasih config yang bersih dan langsung jalan. Yang tidak diceritakan: kenapa setiap `nginx -t` sukses tapi browser tetap bilang `502 Bad Gateway`.

Jawabannya: service saya jalan di port yang berbeda dari yang saya kira, karena ada instance lama yang masih running dan rebutan port.

```bash
# Cek siapa yang pakai port berapa
ss -tulpn | grep LISTEN
```

Perintah itu yang akhirnya menyelamatkan saya.

## Config akhir yang jalan

```nginx
server {
    listen 443 ssl;
    server_name terces.dev;

    ssl_certificate     /etc/letsencrypt/live/terces.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/terces.dev/privkey.pem;

    location / {
        proxy_pass http://localhost:4321;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Sederhana. Tapi butuh 3 jam untuk sampai ke sini.
