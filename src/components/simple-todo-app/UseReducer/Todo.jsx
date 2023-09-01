import { useState, useReducer } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload.trim() !== "") {
        return [...state, { text: action.payload, done: false }];
      }
      return state;
    case "MARK_DONE":
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, done: true } : todo
      );
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [currentTodo, setCurrentTodo] = useState("");
  const [alert, setAlert] = useState(false);

  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: currentTodo });
      setCurrentTodo("");
    } else {
      setAlert(true);
    }
  };

  const handleTodoDone = (index) => {
    dispatch({ type: "MARK_DONE", payload: index });
  };

  return (
    <div className="mt-5 container">
      <h1>Simple Todo</h1>
      <div className="d-flex flex-column flex-sm-row ms-sm-0">
        <input
          type="text"
          placeholder="Enter todo"
          className="form-control"
          value={currentTodo}
          onChange={handleTodoChange}
        />
        <button
          className="mt-3 mt-sm-0 ms-sm-3 btn btn-primary"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
      {alert && (
        <p className="alert alert-danger mt-2">Please write your todo.</p>
      )}
      <ul className="list-group mt-3 w-100">
        {todos.map((todo, idx) => (
          <li
            className={`list-group-item w-100 ${
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

export default Todo;
