import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import AppContainer from './src/navigator/AppContainer';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <AppContainer/>
      </SafeAreaView>
    </>
  );
};

export default App;
