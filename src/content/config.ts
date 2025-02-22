import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    thumbnail: z.string().optional(),
    category: z.enum(['CYCLING', 'LIFE']).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};