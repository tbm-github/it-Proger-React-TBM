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
    onCheckbox: (
      state,
      action: PayloadAction<{ id: string; isChecked: boolean }>
    ) => {
      return state.map((el) => {
        return el.id === action.payload.id
          ? {
              ...el,
              status: action.payload.isChecked ? "notCompleted" : "completed",
            }
          : el;
      });
    },
    onRemove: (todos, action: PayloadAction<string>) => {
      return todos.map((el) => {
        return el.id === action.payload ? { ...el, deleted: !el.deleted } : el;
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
