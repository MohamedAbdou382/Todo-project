import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import Todo from "./component/Todo";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="body">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todo todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};
export default App;
