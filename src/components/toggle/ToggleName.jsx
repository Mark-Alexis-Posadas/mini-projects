// import { useState } from "react";

import { useState } from "react";

// const ToggleName = () => {
//   const [name, setName] = useState("Alex");
//   const handleClick = () => {
//     setName((preveName) => (preveName === "Alex" ? "Alexis" : "Alex"));
//   };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button className="btn btn-primary" onClick={handleClick}>
//         Toggle Name
//       </button>
//     </div>
//   );
// };

// export default ToggleName;

const ToggleName = () => {
  const buttons = ["Button 1", "Button 2", "Button 3"];
  const [n, setN] = useState([]);
  const handleClick = (e) => {
    setN(e);
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
