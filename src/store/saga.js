import { delay, put, takeEvery } from "redux-saga/effects";
import { increment, increment_async } from "./types";

export function* incrementAsync() {
  yield delay(2000);
  yield put({ type: increment });
}

export function* watchIncrementAsync() {
  yield takeEvery(increment_async, incrementAsync);
}
