import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './../redux/transaction/transaction.saga';
import { watchGetFriendGroups } from '../redux/friend/friend.saga';
import { watchloginAction } from '../redux/login/\blogin.saga';

export default function* rootSaga() {
    yield all([
      watchIncrementAsync(),
      watchGetFriendGroups(),
      watchloginAction()
    ])
  }