import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ProfileScreen } from "../../screens/profile/details/ProfileScreen";
import { NotiSettingsScreen } from "../../screens/profile/notiSettings/NotiSettings";
import { TransitionConfiguration } from "../transitionConfig";
import { MyQRCodeScreen } from "../../screens/profile/myQRCode/MyQRCodeScreen";
const ProfileNavigator = createStackNavigator(
  {
   
    Profile: {
      screen: ProfileScreen
    },
    NotiSettings: {
      screen: NotiSettingsScreen
    },
    MyQRCode: {
      screen: MyQRCodeScreen
    },
  },
  {
    headerMode: "none",
    // initialRouteName:'ProfileScreen',
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(ProfileNavigator);
