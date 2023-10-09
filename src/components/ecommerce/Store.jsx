import { useEffect } from "react";
import { useState } from "react";

export default function Store() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid my-5 grid-cols-4 gap-4">
      {data.map((d) => (
        <div key={d.id} className="shadow-lg rounded-lg screen-auto p-5">
          <img className="w-10 h-10" src={d.image} alt={d.title} />
          <h1 className="my-3 font-bold text-lg">{d.title}</h1>
          <span className="font-bold my-3">Price: {d.price}</span>
          <br />
          <span className="my-3 d-block font-bold">{d.category}</span>
          <p>{d.description}</p>
          <button className="btn w-100 text-white bg-blue-800 p-[5px] my-3 hover:bg-violet-600 active:bg-violet-700">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
