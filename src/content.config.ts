import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const didyouknow = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/didyouknow' }),
  schema: z.object({ title: z.string(), titleEn: z.string().optional(), photo: z.string().optional(),
    points: z.array(z.string()).length(3), publishDate: z.coerce.date() }),
});
export const collections = { didyouknow };
