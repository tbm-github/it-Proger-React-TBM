import React, { useState } from "react";
import Counter from "./modules/counter";
import { store } from "./components/ReduxTools";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
