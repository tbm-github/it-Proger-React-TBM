import { put, takeLatest, delay } from "redux-saga/effects";
import { decrement, increment } from "./counterReducer";

function* increase({ payload }: ReturnType<typeof increment>) {
  try {
    yield delay(2000);
    console.log("increase in Saga");
    // yield put(actions.increaseSuccess(payload));
  } catch (e) {
    // yield put(actions.increaseFailed());
  }
}

function* decrease({ payload }: ReturnType<typeof decrement>) {
  try {
    yield delay(2000);
    console.log("decrease in Saga");
    // yield put(actions.increaseSuccess(payload));
  } catch (e) {
    // yield put(actions.increaseFailed());
  }
}

export default function* counterSaga() {
  yield takeLatest(increment, increase);
  yield takeLatest(decrement, decrease);
}
