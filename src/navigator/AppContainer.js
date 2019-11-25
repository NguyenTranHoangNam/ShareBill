import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Splash } from "../screens/splash/SplashView";
import { Register } from "../screens/register/RegisterView";
import { Login, LoginScreen } from "../screens/login/LoginScreen";
import { TabScreens } from "./tabNavigation/TabNavigation";

const AppNavigator = createStackNavigator(
  {
    Menu: {
      screen: TabScreens
    },
    Splash: {
      screen: Splash
    },
    Register: {
      screen: Register
    },
    Login: LoginScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
