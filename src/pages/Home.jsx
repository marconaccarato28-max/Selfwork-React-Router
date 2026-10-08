import useScroll from "../hooks/useScroll.jsx";

function Home() {

const scrollY = useScroll();

return (

<>

<h1>Home Page</h1>

<p>Scroll: {scrollY}</p>

<div style={{ height: "1500px" }}></div>

</>

);

}

export default Home;