import React from "react";

function ToDoItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      {task.text}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
