import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from '../screens/transaction/update/saga/transactionSaga'

export default function* rootSaga() {
    yield all([
      watchIncrementAsync()
    ])
  }