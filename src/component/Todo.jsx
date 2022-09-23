import React from "react";

const todo = ({ todo, setTodo, setEditTodo }) => {
  const handleComplete = (todoo) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todoo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todoo) => todoo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todoo) => todoo.id !== id));
  };
  return (
    <div>
      {todo.map((todoo) => (
        <li className="list-item" key={todoo.id}>
          <input
            type="text"
            value={todoo.title}
            className={`list ${todoo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todoo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todoo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todoo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default todo;
