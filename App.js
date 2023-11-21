import React, { useState } from "react";
import Counter from "./modules/counter";
import { store } from "./components/ReduxTools";
import { Provider } from "react-redux";
import TaskManager from "./modules/taskManager";

export default function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <TaskManager />
    </Provider>
  );
}
