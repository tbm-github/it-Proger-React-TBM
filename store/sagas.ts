import { all } from "redux-saga/effects";
import counterSaga from "../modules/counter/sagas";
import taskManagerSaga from "../modules/taskManager/saga";

function* rootSaga() {
  yield all([counterSaga(), taskManagerSaga()]);
}

export default rootSaga;
