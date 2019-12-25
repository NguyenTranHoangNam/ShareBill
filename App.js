import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import AppContainer from './src/navigator/AppContainer';
import NavigationService from './src/navigator/NavigationService';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
const App: () => React$Node = () => {
  return (
    <>
    <Provider store = {store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <AppContainer  ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      </SafeAreaView>
      </Provider>
    </>
  );
};
sagaMiddleware.run(rootSaga)

export default App;
