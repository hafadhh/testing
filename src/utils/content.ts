import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
}

export async function getAllProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  const projects = await getAllProjects();
  return projects.filter(p => p.data.featured);
}

export async function getRecentPosts(n = 5) {
  const posts = await getAllPosts();
  return posts.slice(0, n);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date).replace(/\//g, '.');
}

export function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.ceil(words / 200); // 200 wpm
}

export function getTagColor(tag: string): string {
  const hash = [...tag].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hues = [180, 195, 210, 170, 200]; // all in cyan family
  return `hsl(${hues[hash % hues.length]}, 80%, 70%)`;
}
