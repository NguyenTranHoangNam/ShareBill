import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import AppContainer from './src/navigator/AppContainer';
import NavigationService from './src/navigator/NavigationService';

import {Provider} from 'react-redux';
import {persistor, store} from './src/saga/store';
import {PersistGate} from 'redux-persist/lib/integration/react'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>
          <AppContainer  ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
