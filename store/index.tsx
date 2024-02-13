import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../modules/taskManager/todoReducer";
import counterReducer from "../modules/counter/counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
