import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { addTodo } from "../Store/todoSlice";

const TaskInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);


// Dispatch the task Input value to add in the todo slice using redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      dispatch(addTodo(todoInput.trim()));
      setTodoInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          ref={inputRef} // Assign ref to the input element
          placeholder="Enter a new task"
          type="text"
          className="todo-input"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="todo-button" type="submit">
          <FontAwesomeIcon icon={faPlusSquare} className="plus-button" />
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
