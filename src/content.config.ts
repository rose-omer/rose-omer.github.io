import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Filtrede görünen etiketler. Sıra, filtre düğmelerinin sırasıdır. */
export const TAGS = ['YOLO', 'OCR', 'VLM', 'LLM', 'Görüntü', 'ML', 'Veri', 'Web', 'Mobil'] as const;
export type Tag = (typeof TAGS)[number];

/** Görsel kapağı olmayan projede çizilen motif. */
export const MOTIFS = ['tespit', 'siniflandirma', 'metin', 'arayuz', 'akis'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(2),
        summary: z.string().min(20).max(160),
        tags: z.array(z.enum(TAGS)).min(1),
        role: z.string(),
        year: z.number().int().min(2018).max(2100),
        stack: z.array(z.string()).min(1),
        metrics: z
          .array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() }))
          .default([]),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        motif: z.enum(MOTIFS).default('tespit'),
        compare: z
          .object({
            before: image(),
            after: image(),
            beforeLabel: z.string(),
            afterLabel: z.string(),
            beforeAlt: z.string(),
            afterAlt: z.string(),
            caption: z.string(),
          })
          .optional(),
        gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string() })).default([]),
        learned: z.array(z.string()).default([]),
        repo: z.url(),
        demo: z.url().optional(),
        demoNote: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().int().default(100),
        lang: z.enum(['tr', 'en']).default('tr'),
      })
      .refine((p) => !p.cover || !!p.coverAlt, {
        message: 'Kapak görseli olan projede `coverAlt` zorunlu.',
        path: ['coverAlt'],
      }),
});

export const collections = { projects };
