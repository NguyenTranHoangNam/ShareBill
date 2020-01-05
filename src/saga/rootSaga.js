import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './../redux/transaction/transaction.saga';
import { watchGetFriendGroups } from '../redux/friend/friend.saga';

export default function* rootSaga() {
    yield all([
      watchIncrementAsync(),
      watchGetFriendGroups()
    ])
  }