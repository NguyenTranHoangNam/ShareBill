import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Splash } from "../screens/splash/SplashView";
import { Register } from "../screens/register/RegisterView";
import { Login } from "../screens/login/LoginView";
import { ListGroup } from "../screens/listGroup/ListGroup";


const AppNavigator = createStackNavigator(
  {

    Splash: {
      screen: Splash
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    ListGroup: {
      screen: ListGroup
    },
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
