import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from './rootSaga';

/* Reducers */
import {transactionReducer as transaction} from './../redux/transaction/transaction.reducer';
import {groupReducer as group} from './../redux/group/group.reducer';
import {friendReducer as friend} from './../redux/friend/friend.reducer';
const reducers = {
    transaction,
    group,
    friend
};

/* Redux-Persist */
const rootReducer = persistCombineReducers({
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['transaction','group','friend'],
}, reducers);

/* Saga */
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

/* Create Store */
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

/* Redux-Persist + Store */
export const persistor = persistStore(store);

/* Run saga */
sagaMiddleware.run(rootSaga);