import { todo } from "node:test";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo";
type TaskManagerType = { todos: TodoType[]; loading: boolean; error?: string };

const initialState: TaskManagerType = {
  todos: [
    { title: "Task 1", status: "notCompleted", deleted: false, id: "0" },
    { title: "Task 2", status: "notCompleted", deleted: false, id: "1" },
    { title: "Task 3", status: "notCompleted", deleted: false, id: "2" },
  ],
  loading: false,
  error: undefined,
};

const taskManagerSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onChooseInit: (state, action: PayloadAction<TodoType>) => {
      return {
        todos: [
          ...state.todos.map((el) => {
            return el.id === action.payload.id ? action.payload : el;
          }),
        ],
        loading: true,
      };
    },
    onChooseSucceed: (state, action: PayloadAction<TodoType>) => {
      return { ...state, loading: false };
    },
    onChooseFailure: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, loading: false };
    },

    onRemove: (state, action: PayloadAction<TodoType>) => {
      return {
        ...state,
        todos: state.todos.map((el) => {
          return el.id === action.payload.id ? action.payload : el;
        }),
      };
    },
    onAddInit: (state, action: PayloadAction<TodoType>) => {
      return { ...state, loading: true };
    },
    onAddSucceed: (state, action: PayloadAction<TodoType>) => {
      return { todos: [...state.todos, action.payload], loading: false };
    },
    onAddFailure: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, loading: false };
    },

    onInit: (state, action: PayloadAction<TodoType[]>) => {
      return { ...state, todos: action.payload, loading: false };
    },
  },
});

export const {
  onChooseInit,
  onChooseSucceed,
  onChooseFailure,
  onAddInit,
  onAddSucceed,
  onAddFailure,
  onRemove,
  onInit,
} = taskManagerSlice.actions;

export default taskManagerSlice.reducer;
