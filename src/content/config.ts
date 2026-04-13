import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    audioUrl: z.string().url(),
    duration: z.string().optional(),
    guest: z.string().optional(),
    episodeNumber: z.number().optional(),
    // true = migrated from Himalaya; false = new Pinecast episode
    isLegacy: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { episodes };
