import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  { title: "Task 1", status: "notCompleted", deleted: false, id: "0" },
  { title: "Task 2", status: "notCompleted", deleted: false, id: "1" },
  { title: "Task 3", status: "notCompleted", deleted: false, id: "2" },
];

const taskManagerSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onCheckbox: (state, action: PayloadAction<{id:string,isChecked: boolean}>) => {
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
    onAdd: (state, action: PayloadAction<string>) => {
      return [
        ...state,
        {
          title: action.payload,
          status: "notCompleted",
          deleted: false,
          id: Math.random().toString(36).substring(7),
        },
      ];
    },
  },
});

export const { onCheckbox, onAdd, onRemove } = taskManagerSlice.actions;

export default taskManagerSlice.reducer;
