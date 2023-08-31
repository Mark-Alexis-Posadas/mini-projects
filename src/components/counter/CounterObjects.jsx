import { useReducer } from "react";

const initialCounter = { count: 0 };
const reducerFunction = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return currentState;
  }
};
const CounterObjects = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialCounter);
  return (
    <div className="container p-5">
      <h4>{state.count}</h4>
      <button
        className="btn btn-primary me-2"
        onClick={() => dispatch({ type: "increment" })}
      >
        increment
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrement
      </button>
    </div>
  );
};

export default CounterObjects;
