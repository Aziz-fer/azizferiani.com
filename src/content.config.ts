import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const l10n = z.object({ en: z.string(), de: z.string(), ar: z.string() });

const books = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleTranslations: l10n,
      author: z.string(),
      authorLatin: z.string(),
      year: z.number(),
      /** Language the book is written in, as a BCP 47 tag. */
      lang: z.string().default('ar'),
      genre: l10n,
      tagline: l10n,
      /** Paragraphs separated by blank lines. */
      blurb: l10n,
      pages: z.number(),
      chapters: z.number(),
      cover: image(),
      backCover: image().optional(),
      pdf: z.object({ href: z.string(), downloadName: z.string(), size: z.string() }),
      gallery: z.array(z.object({ src: image(), caption: z.string(), chapter: z.number() })).default([]),
      /** Bookshelf order: lower comes first. */
      order: z.number().default(0),
      /** Social preview image in public/ (1200×630). Falls back to the site-wide one. */
      ogImage: z.string().default('/og.png'),
      /** Shows "translations are coming in a future update". */
      translationsComing: z.boolean().default(false),
    }),
});

export const collections = { books };
