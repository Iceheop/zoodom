import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.coerce.date(),
            category: z.string(),
            readTime: z.string(),
            heroImage: image().optional(),
            tags: z.array(z.string()).default([]),
            stack: z.array(z.string()).default([]),
            status: z.enum(['published', 'draft', 'archived']).default('published'),
            featured: z.boolean().default(false),
            url: z.string().url().optional(),
        }),
});

export const collections = {
    blog,
};
