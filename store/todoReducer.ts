import { todo } from "node:test";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";

const initialState: TodoType[] = [
  { title: "Task 1", status: "notCompleted", deleted: false, id: "0" },
  { title: "Task 2", status: "notCompleted", deleted: false, id: "1" },
  { title: "Task 3", status: "notCompleted", deleted: false, id: "2" },
];

const taskManagerSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onCheckbox: (todos, action: PayloadAction<TodoType>) => {
      return todos.map((el) => {
        return el.id === action.payload.id ? action.payload : el;
      });
    },
    onRemove: (todos, action: PayloadAction<TodoType>) => {
      return todos.map((el) => {
        return el.id === action.payload.id ? action.payload : el;
      });
    },
    onAdd: (state, action: PayloadAction<TodoType>) => {
      return [...state, action.payload];
    },
    onInit: (state, action: PayloadAction<TodoType[]>) => {
      return action.payload;
    },
  },
});

export const { onCheckbox, onAdd, onRemove, onInit } = taskManagerSlice.actions;

export default taskManagerSlice.reducer;
