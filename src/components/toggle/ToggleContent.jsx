import { useState } from "react";

const ToggleContent = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>

      {active && <p>content</p>}
    </div>
  );
};

export default ToggleContent;
