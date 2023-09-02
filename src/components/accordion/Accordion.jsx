import React from "react";
import accordionData from "./data";

export default function Accordion() {
  const [state, setState] = React.useState(accordionData[0].id);
  const toggleAccordion = (id) => {
    setState(id === state ? null : id);
  };
  return (
    <div className="container p-5">
      {accordionData.map((data) => {
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
