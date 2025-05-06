import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};