import React from "react";
import axios from "axios";
const apiData = "https://fakestoreapi.com/products";
const FetchApi = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(apiData).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="row">
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
