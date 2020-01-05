import { INCREMENT } from './transaction.type'
import { takeEvery, put } from 'redux-saga/effects'

export function* incrementAsync() {
    yield put({ type: INCREMENT })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
