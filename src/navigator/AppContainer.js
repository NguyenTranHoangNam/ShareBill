import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../Login/LoginView';
import { Register } from '../Register/RegisterView';

const AppNavigator = createStackNavigator({
    Register: {
        screen: Register,
      },
    Login: {
      screen: Login,
    },
  });
  
  export default createAppContainer(AppNavigator);