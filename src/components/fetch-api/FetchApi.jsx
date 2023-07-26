import axios from "axios";
import { useEffect, useState } from "react";

const apiData = "https://fakestoreapi.com/products";
const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiData).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <div className="d-flex flex-wrap">
      {data.map((d) => {
        const { id, title, description, image } = d;
        return (
          <div className="col-lg-3" key={id}>
            <div className="card text-center">
              <img src={image} alt="image" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card0text">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchApi;
