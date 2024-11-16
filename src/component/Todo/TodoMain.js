import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function TodoMain() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={tasks}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoMain;
