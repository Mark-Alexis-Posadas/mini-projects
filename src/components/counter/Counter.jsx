import { useReducer } from "react";
let initialCounter = 0;
function reducerFunction(state, action) {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialCounter;

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialCounter);

  return (
    <div className="container p-5">
      <h1>{state}</h1>

      <button
        className="btn btn-primary me-3"
        onClick={() => dispatch("increment")}
      >
        +
      </button>
      <button className="btn btn-danger me-3" onClick={() => dispatch("reset")}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => dispatch("decrement")}>
        -
      </button>
    </div>
  );
};

export default Counter;
