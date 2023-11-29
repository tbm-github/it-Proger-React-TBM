import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskManagerSlice = createSlice({
  name: "todos",
  initialState: [
    { title: "Task 1", status: "notCompleted", delete: "false", id: "0" },
  ],
  reducers: {
    onCheckbox: (state) => {
      state.map((el) => {
        return el.id === id
          ? { ...el, status: isChecked ? "notCompleted" : "completed" }
          : el;
      });
    },
    onAdd: (state) => {
      state.map((el) => {
        return el.id === id
          ? { ...el, status: isChecked ? "notCompleted" : "completed" }
          : el;
      });
    },
    onRemove: (state) => {
      state.map((el) => {
        return el.id === id ? { ...el, delete: "true" } : el;
      });
    },
  },
});

const { onCheckbox, onAdd, onRemove } = taskManagerSlice.actions;

export { onCheckbox, onAdd, onRemove };
