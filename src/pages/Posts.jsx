import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch.jsx";

function Posts() {

const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

return (

<>

<h1>Posts</h1>

{posts.slice(0, 10).map((post) => (

<article key={post.id}>

<h2>{post.title}</h2>

<p>{post.body}</p>

<Link to={"/detail/" + post.id}>Vai al dettaglio</Link>

</article>

))}

</>

);

}

export default Posts;