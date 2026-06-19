---
title: "Debugging Race Condition yang Baru Muncul di Production"
description: "Bug yang tidak pernah muncul di local, tapi konsisten crash di server. Ini proses menemukannya."
publishDate: 2026-05-28
tags: ["debugging", "backend", "cerita"]
draft: false
---

Ada satu jenis bug yang paling menyebalkan: yang hanya muncul di production, tidak pernah bisa direproduksi di local, dan tidak meninggalkan log yang jelas.

Ini cerita tentang salah satunya.

## Setup awalnya

Saya punya API endpoint yang menerima request dan mengupdate dua tabel database secara bersamaan. Di local dengan SQLite, selalu aman. Di production dengan PostgreSQL dan concurrent requests, sekitar 1 dari 50 request gagal dengan error `duplicate key value violates unique constraint`.

## Pertama kali sadar ada masalah

Di production, ada ~200 request per menit. Race window yang di local tidak pernah terbuka, di sini terbuka terus.

## Solusinya

```sql
-- Sebelum: dua query terpisah
INSERT INTO sessions ...
UPDATE users SET session_id = ...

-- Sesudah: satu transaction dengan SELECT FOR UPDATE
BEGIN;
SELECT id FROM users WHERE id = $1 FOR UPDATE;
INSERT INTO sessions ...
UPDATE users SET session_id = ...
COMMIT;
```

Lock di level row. Race window tertutup.

Pelajaran: selalu test dengan database yang sama dengan production, dan selalu test dengan concurrent load.
