import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoReducer";
import counterReducer from "./counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

