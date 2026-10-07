import { Link, useLoaderData } from "react-router-dom";

function Posts() {
const posts = useLoaderData();

return (
<>
<h1>Posts</h1>

{posts.slice(0, 10).map((post) => (
<article key={post.id}>
<h2>{post.title}</h2>
<p>{post.body}</p>

<Link to={`/detail/${post.id}`}>
Vai al dettaglio
</Link>
</article>
))}
</>
);
}

export default Posts;