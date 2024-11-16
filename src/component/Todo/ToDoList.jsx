import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, toggleCompleteTask, deleteTask }) {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            onToggle={() => toggleCompleteTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
