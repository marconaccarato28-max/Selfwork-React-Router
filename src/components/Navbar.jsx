import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

function Navbar() {
const { user, logout } = useUser();

return (
<nav>
<Link to="/">Home</Link>{" "}

{user && <Link to="/posts">Posts</Link>}

{!user && (
<>
<Link to="/login">Login</Link>{" "}
<Link to="/register">Register</Link>
</>
)}

{user && (
<>
<span>Ciao, {user.name}</span>{" "}
<button onClick={logout}>
Logout
</button>
</>
)}
</nav>
);
}


export default Navbar;