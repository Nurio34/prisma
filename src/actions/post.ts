"use server";

import prisma from "@/lib/db";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData): Promise<Post | null> => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    try {
        if (!title && !content) {
            return null;
        }

        const data = {
            title,
            content,
            author: { connect: { id: "clxxbqd960000jikdp1fn2qau" } },
        };

        const newPost = await prisma.post.create({
            data,
        });

        return newPost;
    } catch (error) {
        return null;
    } finally {
        revalidatePath("/postsApp");
    }
};

export const getPosts = async (
    index: number,
): Promise<{ id: string; title: string }[]> => {
    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
            },
            skip: index * 10,
            take: 10,
        });
        return posts;
    } catch (error) {
        throw new Error("qwd");
    }
};

export const getPost = async (id: string): Promise<Post> => {
    try {
        const where = {
            id,
        };

        const post = await prisma.post.findUnique({
            where,
        });

        if (!post) {
            throw new Error("s");
        }

        return post;
    } catch (error) {
        throw new Error("qwd");
    }
};

export const getPostsCount = async () => {
    const count = await prisma.post.count();
    return count;
};
