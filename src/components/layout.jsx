import { Link, Outlet } from "react-router-dom";

function Layout() {
return (
<>
<nav>
<Link to="/">Home</Link>{" "}
<Link to="/posts">Posts</Link>{" "}
<Link to="/login">Login</Link>{" "}
<Link to="/register">Register</Link>
</nav>

<Outlet />
</>
);
}

export default Layout;