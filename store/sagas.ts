import { all } from "redux-saga/effects";
import counterSaga from "../modules/counter/sagas";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
