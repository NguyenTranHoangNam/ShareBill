import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from './rootSaga';

/* Reducers */
import transactionReducer from './../redux/transaction/transaction.reducer';

const reducers = {
    transactionReducer
};

/* Redux-Persist */
const rootReducer = persistCombineReducers({
  key: 'root',
  storage: AsyncStorage,
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