import React from "react";
import accordionData from "./data";

const initialState = accordionData;

const reducer = (currentState, action) => {
  switch (action.type) {
    case "TOGGLE_ACCORDION":
      return action.id === currentState ? null : action.id;
    default:
      return currentState;
  }
};
export default function AccordionReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const toggleAccordion = (id) => {
    dispatch({
      type: "TOGGLE_ACCORDION",
      id,
    });
  };

  return (
    <div>
      {initialState.map((data) => {
        const isActive = data.id === state;
        return (
          <div className="accordion" key={data.id}>
            <h1
              className={`accordion__title ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(data.id)}
            >
              {data.title}
            </h1>
            {isActive && <p className="accordion__body">{data.body}</p>}
          </div>
        );
      })}
    </div>
  );
}
