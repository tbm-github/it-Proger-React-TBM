import { put, takeLatest, delay } from "redux-saga/effects";
import { onInit, onCheckbox, onRemove, onAddInit } from "./todoReducer";
import * as actions from "./todoReducer";
import * as api from "../../api/todo";
import { error } from "node:console";
// import {onCheckbox, onAdd, onRemove, onInit }

function* initialization({ payload }: ReturnType<typeof onInit>) {
  try {
    console.log("initialization in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    // yield put(actions.initializationFailed());
  }
}

function* choosing({ payload }: ReturnType<typeof onCheckbox>) {
  try {
    console.log("choosing Checkbox in Saga");
    yield api.putTodo(payload);
    // yield put(actions.choosingSuccess(payload));
  } catch (e) {
    // yield put(actions.choosingFailed());
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

function* removing({ payload }: ReturnType<typeof onRemove>) {
  try {
    console.log("removing in Saga");
    yield api.putTodo(payload);
    // yield put(actions.removingSuccess(payload));
  } catch (e) {
    // yield put(actions.removingFailed());
  }
}

export default function* taskManagerSaga() {
  yield takeLatest(onInit, initialization);
  yield takeLatest(onCheckbox, choosing);
  yield takeLatest(onAddInit, add);
  yield takeLatest(onRemove, removing);
}
