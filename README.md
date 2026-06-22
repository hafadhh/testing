# TERCES — Personal Portfolio & Blog

Personal website dengan tema **Persona 3 Reload**, dibangun dengan Astro.

## Stack

- **Framework**: [Astro](https://astro.build) v4
- **Language**: TypeScript
- **Styling**: Pure CSS (design tokens + CSS custom properties)
- **Animation**: CSS + Vanilla JS (no library)
- **Content**: Astro Content Collections (Markdown)

## Struktur Direktori

```
terces-blog/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── motion/
│   │   │   ├── IntroOverlay.astro   # Wave-wipe entrance animation (home only)
│   │   │   └── TakeoverOverlay.astro # Full-screen detail takeover (4-bar + panel)
│   │   ├── nav/
│   │   │   ├── SideNav.astro        # Sidebar navigation (hover reveal-sweep + P3R style)
│   │   │   └── TopBar.astro         # Top-right icon cluster (search, theme toggle)
│   │   ├── ui/
│   │   │   ├── PostCard.astro       # Blog post list item
│   │   │   ├── ProjectCard.astro    # Project card (case file style)
│   │   │   ├── SectionHead.astro    # Big-number section heading (03 / SECTION)
│   │   │   └── Tag.astro            # Tag pill
│   │   └── music/
│   │       └── MiniPlayer.astro     # Fixed music pill (bottom-left)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Full shell: SideNav + MiniPlayer + slot
│   │   └── BlogLayout.astro         # Blog/project detail: header + prose + slot
│   │
│   ├── pages/
│   │   ├── index.astro              # Home — hero + recent posts + featured projects
│   │   ├── about.astro              # About — hobi, musik, cara berpikir
│   │   ├── contact.astro            # Contact — email, github, socials
│   │   ├── 404.astro
│   │   ├── rss.xml.ts               # RSS feed endpoint
│   │   ├── blog/
│   │   │   ├── index.astro          # Blog archive list
│   │   │   └── [slug].astro         # Blog post detail
│   │   └── projects/
│   │       ├── index.astro          # Projects list (grouped by status)
│   │       └── [slug].astro         # Project detail (case file)
│   │
│   ├── content/
│   │   ├── config.ts                # Zod schema untuk blog & projects
│   │   ├── blog/
│   │   │   ├── debugging-race-condition.md
│   │   │   ├── kenapa-saya-pindah-ke-astro.md
│   │   │   └── setup-reverse-proxy.md
│   │   └── projects/
│   │       ├── automation-pipeline.md
│   │       ├── project-alpha.md
│   │       └── terces-blog.md
│   │
│   ├── styles/
│   │   ├── tokens.css               # Design tokens: warna, font, easing, layout
│   │   └── global.css               # Reset, prose, utility classes, animasi global
│   │
│   ├── utils/
│   │   └── content.ts               # getAllPosts, getAllProjects, formatDate, dll
│   │
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   │
│   ├── config/
│   │   └── site.ts                  # Config global: title, nav, author, nowPlaying
│   │
│   ├── content.config.ts            # Astro v5 content layer config
│   └── env.d.ts                     # Astro env type declarations
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .gitignore
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Build untuk production:

```bash
npm run build
npm run preview
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

## Character Art

Di `src/pages/index.astro`, section `.hero-focal` ada geometric placeholder SVG.
Ganti dengan `<img src="/images/character.png" alt="">` dan taruh file-nya di `public/images/`.