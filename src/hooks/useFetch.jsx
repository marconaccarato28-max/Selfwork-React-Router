import { useEffect, useState } from "react";

function useFetch(url) {

const [data, setData] = useState([]);

useEffect(() => {

async function getData() {

const response = await fetch(url);

const result = await response.json();

setData(result);

}

getData();

}, [url]);

return data;

}

export default useFetch;