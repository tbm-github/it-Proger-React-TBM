import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../modules/taskManager/todoReducer";
import counterReducer from "../modules/counter/counterReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
