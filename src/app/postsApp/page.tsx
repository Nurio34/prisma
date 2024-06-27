import Posts from "./Components/Posts";
import CreatePost from "./Components/CreatePost";
import prisma from "@/lib/db";

async function PostsApp() {
    return (
        <main className=" py-[2vw] px-[4vw]">
            <Posts />
            <CreatePost />
        </main>
    );
}

export default PostsApp;
