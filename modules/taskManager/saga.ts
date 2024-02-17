import { put, takeLatest, delay } from "redux-saga/effects";
import { onInit, onCheckbox, onAdd, onRemove } from "./todoReducer";
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
    console.log("choosing in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    // yield put(actions.initializationFailed());
  }
}

function* adding({ payload }: ReturnType<typeof onAdd>) {
  try {
    yield delay(2000);
    console.log("adding in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    // yield put(actions.initializationFailed());
  }
}

function* removing({ payload }: ReturnType<typeof onRemove>) {
  try {
    yield delay(2000);
    console.log("removing in Saga");
    // yield put(actions.initializationSuccess(payload));
  } catch (e) {
    // yield put(actions.initializationFailed());
  }
}

export default function* taskManagerSaga() {
  yield takeLatest(onInit, initialization);
  yield takeLatest(onCheckbox, choosing);
  yield takeLatest(onAdd, adding);
  yield takeLatest(onRemove, removing);
}
