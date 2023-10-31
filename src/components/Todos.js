import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="Todos">
      <h1>My todos</h1>
      <div className="todo-holder">
        {todo && todo.map((val,index) => <p key={index}>{val}</p>)}
      </div>
      <br></br>
      <button id="add-todo-button" onClick={() => setTodo([...todo, "New todo"])}>Add Todo</button>
    </div>
  );
};

export default Todos;
