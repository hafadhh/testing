export const SITE = {
  title: 'TERCES',
  tagline: 'Cara saya berpikir, bukan cuma membangun.',
  description: 'Blog personal — catatan proses, keputusan teknis, dan hal-hal di luar profesionalitas.',
  url: 'https://terces.dev',
  author: {
    name: 'Terces',
    email: 'hi@terces.dev',
    github: 'https://github.com/terces',
    twitter: 'https://twitter.com/terces',
  },
  nav: [
    { label: 'Home',     href: '/',         idx: '01' },
    { label: 'About',    href: '/about',    idx: '02' },
    { label: 'Projects', href: '/projects', idx: '03' },
    { label: 'Blog',     href: '/blog',     idx: '04' },
    { label: 'Contact',  href: '/contact',  idx: '05' },
  ],
  nowPlaying: {
    title: 'FULL MOON FULL LIFE',
    artist: 'Persona 3 Reload OST',
    duration: 227,
  },
} as const;
