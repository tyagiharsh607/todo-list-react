import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TaskList = () => {
    // useSelector hook to select the state value from the store
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
