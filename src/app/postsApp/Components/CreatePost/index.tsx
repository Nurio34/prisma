import { createPost } from "@/actions/post";
import CreateBtn from "../CreateBtn";

function CreatePost() {
    return (
        <section className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] shadow-md shadow-secondary rounded-md">
            <h2 className=" text-center font-semibold text-xl">Create Post</h2>
            <form action={createPost} className="grid gap-[1vh]">
                <label htmlFor="title">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title..."
                        className="input input-sm input-accent w-full"
                    />
                </label>
                <label htmlFor="content">
                    <textarea
                        name="content"
                        id=""
                        rows={5}
                        placeholder="Content..."
                        className=" textarea  textarea-accent w-full"
                    ></textarea>
                </label>
                <CreateBtn />
            </form>
        </section>
    );
}

export default CreatePost;
