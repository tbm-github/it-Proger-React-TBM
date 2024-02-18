import { put, takeLatest, delay } from "redux-saga/effects";
import { onInit, onCheckbox, onAdd, onRemove } from "./todoReducer";
import { createTodo, putTodo } from "../../api/todo";
// import {onCheckbox, onAdd, onRemove, onInit }

function* initialization({ payload }: ReturnType<typeof onInit>) {
  try {
    yield delay(2000);
    console.log("initialization in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    // yield put(actions.initializationFailed());
  }
}

function* choosing({ payload }: ReturnType<typeof onCheckbox>) {
  try {
    yield delay(2000);
    console.log("choosing Checkbox in Saga");
    yield putTodo(payload);
    // yield put(actions.choosingSuccess(payload));
  } catch (e) {
    // yield put(actions.choosingFailed());
  }
}

function* adding({ payload }: ReturnType<typeof onAdd>) {
  try {
    yield createTodo(payload);
    // yield put(actions.addingSuccess(payload));
  } catch (e) {
    // yield put(actions.addingFailed());
  }
}

function* removing({ payload }: ReturnType<typeof onRemove>) {
  try {
    yield delay(2000);
    console.log("removing in Saga");
    putTodo(payload);
    // yield put(actions.removingSuccess(payload));
  } catch (e) {
    // yield put(actions.removingFailed());
  }
}

export default function* taskManagerSaga() {
  yield takeLatest(onInit, initialization);
  yield takeLatest(onCheckbox, choosing);
  yield takeLatest(onAdd, adding);
  yield takeLatest(onRemove, removing);
}
