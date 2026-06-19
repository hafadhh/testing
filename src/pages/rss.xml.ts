import rss from '@astrojs/rss';
import { getAllPosts } from '@utils/content';
import { SITE } from '@config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!.toString(),
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>id-ID</language>',
  });
}
