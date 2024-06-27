import SubmitBtn from "./Components/SubmitBtn";

function SignupPage() {
    return (
        <main className="padding1">
            <form action="signup">
                <fieldset className="py-[2vh] px-[4vw] grid gap-[1vh] max-w-xs shadow-md shadow-primary rounded-lg  ">
                    <legend className=" text-center font-semibold text-2xl">
                        Sign Up !
                    </legend>
                    <label htmlFor="name">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name..."
                            className="input input-sm input-secondary w-full"
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email..."
                            className="input input-sm input-secondary w-full"
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password..."
                            className="input input-sm input-secondary w-full"
                        />
                    </label>
                    <SubmitBtn />
                </fieldset>
            </form>
        </main>
    );
}

export default SignupPage;
