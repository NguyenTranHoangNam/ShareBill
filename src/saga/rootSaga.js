import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './../redux/transaction/transaction.saga';

export default function* rootSaga() {
    yield all([
      watchIncrementAsync()
    ])
  }