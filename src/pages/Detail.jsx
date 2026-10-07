import { Link, useLoaderData } from "react-router-dom";

function Detail() {
const post = useLoaderData();

return (
<>
<h1>Dettaglio post</h1>

<h2>{post.title}</h2>
<p>{post.body}</p>
<p>Post ID: {post.id}</p>

<Link to="/posts">
Torna ai post
</Link>
</>
);
}

export default Detail;