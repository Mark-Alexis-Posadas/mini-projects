import { useState } from "react";

const ToggleContent = () => {
  const [active, setActive] = useState({ button1: false, button2: false });

  const toggleContent = (button) => {
    setActive((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleContent("button1")}
        >
          Click 1
        </button>
        {active.button1 && <p>content for button 1</p>}
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleContent("button2")}
        >
          Click 2
        </button>
        {active.button2 && <p>content for button 2</p>}
      </div>
    </>
  );
};

export default ToggleContent;
