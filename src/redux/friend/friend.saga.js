import { GET_FRIEND_GROUPS } from "./friend.type";
import { takeEvery, put } from "redux-saga/effects";

function* getFriendGroups(action) {
  console.log(action);
}

export function* watchGetFriendGroups() {
  yield takeEvery(GET_FRIEND_GROUPS, getFriendGroups);
}
