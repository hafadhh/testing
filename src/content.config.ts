import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
    coverImage:  z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    stack:       z.array(z.string()),
    repoUrl:     z.string().url().optional(),
    liveUrl:     z.string().url().optional(),
    status:      z.enum(['active', 'archived', 'wip']),
    featured:    z.boolean().default(false),
    startDate:   z.coerce.date(),
    endDate:     z.coerce.date().optional(),
    coverImage:  z.string().optional(),
    order:       z.number().default(99),
  }),
});

export const collections = { blog, projects };
