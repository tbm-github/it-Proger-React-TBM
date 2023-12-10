import React from "react";
import { store } from "./modules/store/index";
import { Provider } from "react-redux";
import Counter from "./modules/counter";
import TaskManager from "./modules/taskManager";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <TaskManager />
    </Provider>
  );
}
