import { useState } from "react";

const RemoveElement = () => {
  const initialState = [
    { id: 1, name: "Banana", amount: 5 },
    { id: 2, name: "Apple", amount: 6 },
  ];
  const [fruits, setFruits] = useState(initialState);

  const removeFruit = (id) => {
    setFruits((current) => current.filter((fruit) => fruit.id !== id));
  };

  return (
    <div style={{ margin: "16px" }}>
      <h1>Remove Element</h1>
      {fruits.map((fruit) => (
        <ul className="list-group" key={fruit.id}>
          <li className="list-group-item w-100 d-flex align-items-center justify-content-between">
            {fruit.name}
            {fruit.amount}
            <button
              className="btn btn-danger"
              onClick={() => removeFruit(fruit.id)}
            >
              x
            </button>
          </li>
          <hr />
        </ul>
      ))}
    </div>
  );
};

export default RemoveElement;
