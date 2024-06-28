import { z } from "zod";

export const PostSchema = z.object({
    title: z.string().min(5),
    content: z.string().min(10),
    slug: z.string(),
});

export type PostType = z.infer<typeof PostSchema>;
