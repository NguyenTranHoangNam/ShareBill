import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Login } from "../Login/LoginView";
import { Register } from "../Register/RegisterView";
import { Splash } from "../Splash/SplashView";
import { ListGroup } from "../ListGroup/ListGroup";

const AppNavigator = createStackNavigator(
  {
    ListGroup: {
      screen: ListGroup
    },
    Splash: {
      screen: Splash
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
