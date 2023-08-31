import { useState } from "react";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="add todo"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo} className="btn btn-primary mt-3">
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            className="list-group-items w-100 d-flex align-items-center justify-content-between"
            key={index}
          >
            {todo}

            <button
              className="btn btn-danger w-auto"
              onClick={() => handleRemove(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
