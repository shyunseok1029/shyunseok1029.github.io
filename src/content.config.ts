import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { blogCategoryNames } from './data/blog-categories';

// 기존 초안은 보존하되 공개 글은 현재 카테고리로 분류해야 한다.
const legacyDraftCategories = ['System Security', 'Network Security', 'Programming'] as const;
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    category: z.enum([...blogCategoryNames, ...legacyDraftCategories]),
    tags: z.array(z.string()).default([]), draft: z.boolean().default(false),
  }).refine(data => data.draft || blogCategoryNames.some(name => name === data.category), {
    path: ['category'],
    message: '공개 글은 현재 블로그 카테고리 중 하나를 사용해야 합니다.',
  }),
});
const writeups = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }), schema: z.object({ title: z.string(), platform: z.string(), difficulty: z.string(), field: z.string(), date: z.coerce.date(), tags: z.array(z.string()).default([]), concepts: z.array(z.string()), draft: z.boolean().default(false) }) });
const projects = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: z.object({ title: z.string(), description: z.string(), kind: z.enum(['개인','팀','연구']), focus: z.array(z.string()), technologies: z.array(z.string()), highlights: z.array(z.string()), security: z.string(), github: z.url().optional(), source: z.url().optional(), image: z.string().optional(), status: z.string(), order: z.number() }) });
export const collections = { blog, writeups, projects };
