import { useReducer } from "react";
const initialState = { text: "Dark" };

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { text: state.text === "Dark" ? "Light" : "Dark" };
    default:
      return state;
  }
};
const ToggleColorObjects = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className={state.text === "Light" ? "theme dark" : "theme light"}>
      <button
        className={state.text === "Light" ? "btn btn-light" : "btn btn-dark"}
        onClick={() => dispatch({ type: "CHANGE_COLOR" })}
      >
        {state.text}
      </button>
    </div>
  );
};

export default ToggleColorObjects;
