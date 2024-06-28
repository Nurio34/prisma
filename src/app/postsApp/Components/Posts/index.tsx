import { getCount, getPosts, getPostsOfUser } from "@/actions/post";
import { Post, User } from "@prisma/client";
import Link from "next/link";

async function index() {
    const user: User & { posts: Post[] } = await getPostsOfUser();
    const count = await getCount();

    return (
        <section className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] shadow-md shadow-secondary rounded-md">
            <h1 className="text-center font-bold text-2xl ">Posts ({count})</h1>
            <ul className=" list-disc list-inside">
                {user.posts.map((post) => {
                    return (
                        <li key={post.slug} className=" capitalize">
                            <Link
                                key={post.slug}
                                href={`postsApp/${post.slug}`}
                            >
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default index;
