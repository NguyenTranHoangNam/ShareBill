import { takeEvery,put } from 'redux-saga/effects'
import { LOGIN } from './login.type'

export function* loginAction() {
    // yield put({ type: INCREMENT })
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchloginAction() {
    yield takeEvery(LOGIN, loginAction)
  }
  