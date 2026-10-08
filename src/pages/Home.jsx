import useScroll from "../hooks/useScroll.jsx";

function Home() {

const scrollY = useScroll();

return (

<main className="min-h-screen bg-base-200 p-8">

<div className="hero bg-base-100 rounded-box shadow-xl">

<div className="hero-content text-center py-16">

<div>

<h1 className="text-5xl font-bold">Home Page</h1>

<p className="py-6">Scroll: {scrollY}</p>

<button className="btn btn-primary">Progetto React</button>

</div>

</div>

</div>

<div className="h-[1500px]"></div>

</main>

);

}

export default Home;