import { getPost } from "@/actions/post";
import React from "react";

async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const post = await getPost(slug);

    return (
        <main>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </main>
    );
}

export default Post;
