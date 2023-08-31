import { useState } from "react";
import searchItems from "./data";

const Nav = () => {
  const [state, setState] = useState(searchItems);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleRemove = (id) => {
    setState((prevState) =>
      prevState.filter((currentState) => currentState.id !== id)
    );
  };

  return (
    <nav className="d-flex align-items-center">
      <h1>Youtube</h1>
      <div className="w-100">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onClick={handleClick}
        />

        {toggle && (
          <ul className="list-group">
            {state.map((items) => {
              return (
                <li
                  className="list-group-item w-100 d-flex align-items-center justify-content-between"
                  key={items.id}
                >
                  <span>
                    <b>{items.title}</b>
                  </span>
                  <a href="#" onClick={() => handleRemove(items.id)}>
                    {items.remove}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
