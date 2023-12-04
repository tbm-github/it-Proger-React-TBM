import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskManagerSlice = createSlice({
  name: "todos",
  initialState: [
    { title: "Task 1", status: "notCompleted", deleted: false, id: "0" },
    { title: "Task 2", status: "notCompleted", deleted: false, id: "1" },
    { title: "Task 3", status: "notCompleted", deleted: false, id: "2" },
  ],
  reducers: {
    onCheckbox: (state) => {
      state.map((el) => {
        return el.id === id
          ? { ...el, status: isChecked ? "notCompleted" : "completed" }
          : el;
      });
    },
    onRemove: (state) => {
      state.map((el) => {
        return el.id === id ? { ...el, deleted: !el.deleted } : el;
      });
    },
    onAdd: (state, text) => {
      return [
        ...state,
        {
          title: text,
          status: "notCompleted",
          deleted: false,
          id: Math.random().toString(36).substring(7),
        },
      ];
    },
  },
});

const { onCheckbox, onAdd, onRemove } = taskManagerSlice.actions;

export { onCheckbox, onAdd, onRemove };
