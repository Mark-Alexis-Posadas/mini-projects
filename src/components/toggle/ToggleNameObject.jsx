import { useReducer } from "react";

const initialState = "";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return action.payload;
    default:
      return state;
  }
};

const ToggleName = () => {
  const buttons = ["Button 1", "Button 2", "Button 3"];
  const [n, dispatch] = useReducer(reducer, initialState);

  const handleClick = (e) => {
    dispatch({ type: "UPDATE_NAME", payload: e });
  };

  return (
    <div className="text-center">
      <h1>{n}</h1>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className="btn btn-primary mx-2"
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleName;
