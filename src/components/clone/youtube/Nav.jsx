import searchItems from "./data";
const Nav = () => {
  return (
    <nav className="d-flex align-items-center">
      <h1>Youtube</h1>
      <div className="w-100">
        <input type="text" placeholder="Search" className="form-control" />
        <ul className="list-group">
          {searchItems.map((items) => {
            return (
              <li
                className="list-group-item w-100 d-flex align-items-center justify-content-between"
                key={items.id}
              >
                <span>
                  <b>{items.title}</b>
                </span>
                <a href="#" onClick={() => handleClick(id)}>
                  {items.remove}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
