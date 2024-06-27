"use client";

import { getPost, getPosts, getPostsCount } from "@/actions/post";
import { useEffect, useState } from "react";
import PaginationBtn from "./Components/PaginationBtn";
import prisma from "@/lib/db";
import Link from "next/link";

function Posts() {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0);
    console.log(posts);

    useEffect(() => {
        if (!count) {
            const getCount = async () => {
                const data = await getPostsCount();
                setCount(data);
            };
            getCount();
        }
    }, []);

    useEffect(() => {
        const getPostsAction = async () => {
            const data = await getPosts(skip);
            setPosts([...data]);
        };
        getPostsAction();
    }, [skip]);

    const totalBtns = Math.ceil(count / 10);

    return (
        <section className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] shadow-md shadow-secondary rounded-md">
            <h1 className="text-center font-bold text-2xl ">Posts</h1>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`postsApp/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex justify-center gap-[1vw]">
                {Array(totalBtns)
                    .fill("#")
                    .map((_, index) => {
                        return (
                            <PaginationBtn
                                key={index}
                                index={index}
                                setSkip={setSkip}
                            />
                        );
                    })}
            </ul>
        </section>
    );
}

export default Posts;

{
}
