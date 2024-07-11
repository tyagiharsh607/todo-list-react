// src/features/todo/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const saveLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adding todos
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      saveLocalStorage(state.todos);
    },

    // Setting the task to be completed
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveLocalStorage(state.todos);
      }
    },

    // Deleting the todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveLocalStorage(state.todos);
    },

    // Editing the todo
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
        saveLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
