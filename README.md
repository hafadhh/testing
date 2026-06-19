# TERCES — Personal Portfolio & Blog

Personal website dengan tema **Persona 3 Reload**, dibangun dengan Astro.

## Stack

- **Framework**: [Astro](https://astro.build) v4
- **Language**: TypeScript
- **Styling**: Pure CSS (Design tokens + CSS custom properties)
- **Animation**: CSS + Vanilla JS (no library)
- **Content**: Astro Content Collections (Markdown)

## Struktur Direktori

```
src/
├── components/
│   ├── ui/              # Shared UI: Tag, PostCard, ProjectCard, SectionHead
│   ├── layout/          # Layout-level components
│   ├── nav/             # SideNav (sidebar navigation)
│   └── music/           # MiniPlayer (fixed pill, bottom-left)
│
├── features/            # Feature-specific components (extend sesuai kebutuhan)
│   ├── blog/
│   ├── projects/
│   ├── about/
│   └── home/
│
├── layouts/
│   ├── BaseLayout.astro # Shell: SideNav + MiniPlayer + slot
│   └── BlogLayout.astro # Blog post wrapper dengan header & prose
│
├── pages/
│   ├── index.astro      # Home — hero + recent posts + featured projects
│   ├── about.astro      # About — hobi, musik, skills, cara kerja
│   ├── blog/
│   │   ├── index.astro  # Blog list dengan tag filter
│   │   └── [slug].astro # Blog post detail
│   ├── projects/
│   │   ├── index.astro  # Projects list (grouped by status)
│   │   └── [slug].astro # Project detail
│   ├── contact.astro    # Contact — email, github, twitter
│   ├── 404.astro
│   └── rss.xml.ts
│
├── content/
│   ├── config.ts        # Zod schema untuk blog & projects
│   ├── blog/            # *.md — file blog posts
│   └── projects/        # *.md — file project descriptions
│
├── data/                # Static data (tidak dari content collections)
├── styles/
│   ├── tokens.css       # Design tokens: warna, font, spacing, motion
│   └── global.css       # Reset, prose, utility classes, animasi global
│
├── utils/
│   └── content.ts       # getAllPosts, getAllProjects, formatDate, dll
│
├── types/
│   └── index.ts         # TypeScript interfaces
│
├── config/
│   └── site.ts          # SITE config: title, nav, author, nowPlaying
│
└── assets/
    ├── fonts/           # Font files lokal (opsional)
    ├── images/          # Static images
    └── icons/           # SVG icons
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

## Tambah Blog Post

Buat file baru di `src/content/blog/nama-post.md`:

```md
---
title: "Judul Post"
description: "Deskripsi singkat."
publishDate: 2026-06-19
tags: ["tag1", "tag2"]
---

Isi konten di sini.
```

## Tambah Project

Buat file baru di `src/content/projects/nama-project.md`:

```md
---
title: "Nama Project"
description: "Deskripsi singkat."
stack: ["Astro", "TypeScript"]
repoUrl: "https://github.com/..."
liveUrl: "https://..."
status: "active"   # active | wip | archived
featured: true
startDate: 2026-01-01
order: 1
---

Penjelasan panjang tentang project.
```

## Ganti Music Player

Edit `src/config/site.ts`:

```ts
nowPlaying: {
  title: 'Judul Lagu',
  artist: 'Nama Artist',
  duration: 227, // dalam detik
}
```

Untuk audio aktual, tambahkan property `src` ke Track type dan pass ke MiniPlayer.

## Character Art

Di `src/pages/index.astro`, section `.hero-focal` ada geometric placeholder.
Ganti dengan `<img>` yang mengarah ke character art kamu di `src/assets/images/`.
