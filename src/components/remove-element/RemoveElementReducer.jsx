import React from "react";
const initialState = [
  { id: 1, name: "Banana", amount: 5 },
  { id: 2, name: "Apple", amount: 6 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE":
      return state.filter((current) => current.id !== action.id);

    default:
      return state;
  }
};
const RemoveElementReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  if (state.length === 0) {
    return <p>No Available Fruits</p>;
  }

  return (
    <div className="container p-5">
      {state.map((fruit) => (
        <ul className="list-group" key={fruit.id}>
          <li className="list-group-item w-100 d-flex align-items-center justify-content-between">
            {fruit.name}
            {fruit.amount}

            <button
              className="btn btn-danger"
              onClick={() => handleRemove(fruit.id)}
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

export default RemoveElementReducer;
