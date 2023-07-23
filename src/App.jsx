import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      setTodos([...todos, { text: currentTodo, done: false }]);
      setCurrentTodo("");
    }
  };

  const handleTodoDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = true;
    setTodos(updatedTodos);
  };

  return (
    <div className="mt-5 container">
      <h1>Simple Todo</h1>
      <div className="d-flex">
        <input
          type="text"
          placeholder="Enter todo"
          className="form-control"
          value={currentTodo}
          onChange={handleTodoChange}
        />
        <button className="ms-3 btn btn-primary w-50" onClick={handleAddTodo}>
          Add todo
        </button>
      </div>
      <ul className="list-group mt-3 w-100">
        {todos.map((todo, idx) => (
          <li
            className={`list-group-item ${
              todo.done ? "done" : ""
            } d-flex align-items-center justify-content-between`}
            key={idx}
          >
            {todo.text}
            {!todo.done && (
              <button
                className="btn btn-sm btn-outline-danger ms-2"
                onClick={() => handleTodoDone(idx)}
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
