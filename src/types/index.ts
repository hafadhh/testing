// ─── Blog ─────────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  updatedDate?: Date;
  tags: string[];
  draft?: boolean;
  coverImage?: string;
  readingTime?: number;
}

// ─── Project ──────────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  status: 'active' | 'archived' | 'wip';
  featured: boolean;
  startDate: Date;
  endDate?: Date;
  coverImage?: string;
}

// ─── Music ────────────────────────────────────────────────────────────────
export interface Track {
  title: string;
  artist: string;
  album?: string;
  duration: number; // seconds
  src?: string;     // optional actual audio src
  coverSrc?: string;
}

// ─── Nav ──────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  idx: string;
}
