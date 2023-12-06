import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosReducer from "./todoReducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
