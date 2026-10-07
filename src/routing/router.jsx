import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout.jsx";
import Home from "../pages/Home.jsx";
import Posts from "../pages/Posts.jsx";
import Detail from "../pages/Detail.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

async function postsLoader() {
const apiUrl =
"https:" + "//jsonplaceholder.typicode.com/posts";

const response = await fetch(apiUrl);

if (!response.ok) {
throw new Error("Errore nel caricamento dei post");
}

return response.json();
}

async function detailLoader({ params }) {
const apiUrl =
"https:" +
`//jsonplaceholder.typicode.com/posts/${params.id}`;

const response = await fetch(apiUrl);

if (!response.ok) {
throw new Error("Errore nel caricamento del post");
}

return response.json();
}

const router = createBrowserRouter([
{
path: "/",
element: <Layout />,
children: [
{
index: true,
element: <Home />,
},
{
path: "posts",
element: <Posts />,
loader: postsLoader,
},
{
path: "detail/:id",
element: <Detail />,
loader: detailLoader,
},
{
path: "login",
element: <Login />,
},
{
path: "register",
element: <Register />,
},
],
},
]);

export default router;