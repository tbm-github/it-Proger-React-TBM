import { put, takeLatest, delay } from "redux-saga/effects";
import { onInit, onChooseInit, onRemove, onAddInit } from "./todoReducer";
import * as actions from "./todoReducer";
import * as api from "../../api/todo";
import { error } from "node:console";
// import {onCheckbox, onAdd, onRemove, onInit }

function* initialize({ payload }: ReturnType<typeof onInit>) {
  try {
    console.log("initialization in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    console.log(e);
    // yield put(actions.initializationFailed());
  }
}

function* choose({ payload }: ReturnType<typeof actions.onChooseInit>) {
  try {
    console.log("choosing Checkbox in Saga");
    yield api.putTodo(payload);
    yield put(actions.onChooseSucceed(payload));
  } catch (e) {
    yield put(actions.onChooseFailure(e as string));
  }
}

function* add({ payload }: ReturnType<typeof onAddInit>) {
  try {
    console.log("adding in Saga");
    yield api.createTodo(payload);
    yield put(actions.onAddSucceed(payload));
  } catch (e) {
    console.log(e);
    yield put(actions.onAddFailure(e as string));
  }
}

function* remove({ payload }: ReturnType<typeof onRemove>) {
  try {
    console.log("removing in Saga");
    yield api.putTodo(payload);
    // yield put(actions.removingSuccess(payload));
  } catch (e) {
    // yield put(actions.removingFailed());
  }
}

export default function* taskManagerSaga() {
  yield takeLatest(onInit, initialize);
  yield takeLatest(onChooseInit, choose);
  yield takeLatest(onAddInit, add);
  yield takeLatest(onRemove, remove);
}
