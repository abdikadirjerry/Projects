import React, { useState } from "react";
// import "../TodoAppStyle.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!task || !user || !date) {
      alert("please fill all field!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task,
      user,
      date,
    };

    setTodos([...todos, newTodo]);

    setTask("");
    setUser("");
    setDate("");
  };

  const handleDelete = (id) => {
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);

  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="todo-container">
      <h2>Todo List App</h2>

      <div className="todo-inputs">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter Deadline"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id} className="todo-item">
            <div>
              <strong>Task:</strong> {item.task}
              <br />
              <strong>User:</strong> {item.user}
              <br />
              <strong>Deadline:</strong> {item.date}
            </div>
            {item.date !== today && (
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
