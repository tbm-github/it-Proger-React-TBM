import { createSlice, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
