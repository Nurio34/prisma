"use server";

import prisma from "@/lib/db";
import { PostSchema } from "@/types/post";
import { Post, Prisma, User } from "@prisma/client";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData): Promise<void> => {
    const title = formData.get("title");
    const content = formData.get("content");
    const slug = (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLocaleLowerCase();

    const unValidatedPost = { title, content, slug };

    const zodResult = PostSchema.safeParse(unValidatedPost);

    if (!zodResult.success) {
        throw new Error(
            zodResult.error.errors.map((error) => error.message).join("---"),
        );
    } else {
        const data = zodResult.data;
        console.log(data);

        try {
            await prisma.post.create({
                data: {
                    ...data,
                    author: {
                        connect: {
                            email: "nuri@mail.com",
                        },
                    },
                },
            });
        } catch (error: any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new Error("Error");
                }
            }
            throw new Error(error);
        } finally {
            revalidatePath("/posts");
        }
    }
};

export const getPosts = async (): Promise<
    { title: string; slug: string }[]
> => {
    try {
        const posts = await prisma.post.findMany({
            select: {
                title: true,
                slug: true,
            },
            take: 5,
            orderBy: {
                updatedAt: "desc",
            },
        });

        if (!posts) {
            throw new Error("Error");
        }

        return posts;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getPost = async (
    slug: string,
): Promise<{ title: string; content: string }> => {
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug,
            },
            select: {
                title: true,
                content: true,
            },
        });

        if (!post) {
            throw new Error("Error");
        }

        return post;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getCount = async (): Promise<number> => {
    try {
        return await prisma.post.count();
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getPostsOfUser = async (): Promise<User & { posts: Post[] }> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: "nuri@mail.com",
            },
            include: {
                posts: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        });

        if (!user) {
            throw new Error("Error");
        }

        return user;
    } catch (error: any) {
        throw new Error(error);
    }
};
