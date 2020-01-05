import { GET_FRIEND_GROUPS } from "./friend.type";
import { takeEvery, put } from "redux-saga/effects";

export function* getFreindGroups(action) {
  console.log(action);
  // yield put({ type: INCREMENT })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetFriendGroups() {
  yield takeEvery(GET_FRIEND_GROUPS, getFreindGroups);
}
