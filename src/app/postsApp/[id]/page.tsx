import { getPost } from "@/actions/post";
import React from "react";

async function Post({ params }: { params: { id: string } }) {
    const id = params.id;

    const post = await getPost(id);

    return (
        <main>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </main>
    );
}

export default Post;
