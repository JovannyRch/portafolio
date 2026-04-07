import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		overview: z.string(),
		problem: z.string(),
		solution: z.string(),
		myRole: z.string(),
		architecture: z.string(),
		impact: z.string(),
		techStack: z.array(z.string()),
		category: z.enum(['mobile', 'backend', 'enterprise']),
		featured: z.boolean().default(false),
		links: z.object({
			github: z.string().url().optional(),
			live: z.string().url().optional(),
			store: z.string().url().optional(),
		}),
		metrics: z.object({
			downloads: z.string().optional(),
			users: z.string().optional(),
			other: z.array(z.string()).default([]),
		}),
		visuals: z
			.array(
				z.object({
					title: z.string(),
					caption: z.string(),
				}),
			)
			.default([]),
	}),
});

export const collections = { projects };
