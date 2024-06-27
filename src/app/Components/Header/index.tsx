import Logo from "./Logo";
import PostsApp from "./PostsApp";
import Auth from "./Auth";

function index() {
    return (
        <header className="flex justify-between padding1 shadow-md shadow-primary">
            <Logo />
            <PostsApp />
            <Auth />
        </header>
    );
}

export default index;
