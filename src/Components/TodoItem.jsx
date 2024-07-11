// src/components/TodoItem.js
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { toggleComplete, removeTodo, editTodo } from "../Store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

//   Using useRef to focus on the input while editing
  const editInputRef = useRef(null);

//   Setting up the states
  const [removing, setRemoving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleRemove = () => {
    setRemoving(true);
  };

//   used for the transition while deleting the task
  const handleTransitionEnd = () => {
    if (removing) {
      dispatch(removeTodo(todo.id));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };


// Saving the edited task
  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, newText: editInput }));
    setIsEditing(false);
  };

  useEffect(() => {
    // Focusing on the input for editing
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={`container-div ${todo.completed ? "fade" : ""} ${
        removing ? "remove" : ""
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          className="edit-input todo-div"
        />
      ) : (
        <div className={`todo-div ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </div>
      )}
      <button
        className="checked-button"
        onClick={() => dispatch(toggleComplete(todo.id))}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="trash-button" onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {isEditing ? (
        <button className="save-button " onClick={handleSave}>
          <FontAwesomeIcon icon={faSave} />
        </button>
      ) : (
        <button className="edit-button" onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
    </div>
  );
};

export default TodoItem;
