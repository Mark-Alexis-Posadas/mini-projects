import { useReducer } from "react";
import buttons from "./button-data";

const initalState = buttons;
const reducerFunction = (currentState, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      return currentState.map((btn) =>
        btn.id === action.payload ? { ...btn, button: !btn.button } : btn
      );
    default:
      return currentState;
  }
};

const ToggleContentObjects = () => {
  const [state, dispatch] = useReducer(reducerFunction, initalState);
  const handleClick = (btnId) => {
    dispatch({
      type: "TOGGLE_BUTTON",
      payload: btnId,
    });
  };
  return (
    <div className="d-flex align-items-center p-5">
      {state.map((button) => (
        <div key={button.id} className="me-3">
          <button
            className={`btn ${button.button ? "btn-secondary" : "btn-primary"}`}
            onClick={() => handleClick(button.id)}
          >
            {button.text}
          </button>

          {button.button && <p>Content here</p>}
        </div>
      ))}
    </div>
  );
};

export default ToggleContentObjects;
