import { useState } from "react";
import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
}

export default App;
