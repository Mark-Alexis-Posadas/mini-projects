import { useState } from "react";

const ToggleColor = () => {
  const [text, setText] = useState("Dark");
  const handleClick = () => {
    setText((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };
  return (
    <div className={text === "Light" ? "theme dark" : "theme light"}>
      <button
        className={text === "Light" ? "btn btn-light" : "btn btn-dark"}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ToggleColor;
