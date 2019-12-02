import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import AppContainer from './src/navigator/AppContainer';
import NavigationService from './src/navigator/NavigationService';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <AppContainer  ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      </SafeAreaView>
    </>
  );
};

export default App;
