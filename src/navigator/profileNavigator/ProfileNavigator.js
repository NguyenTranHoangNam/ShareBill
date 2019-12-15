import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ProfileScreen } from "../../screens/profile/details/ProfileScreen";
import { NotiSettingsScreen } from "../../screens/profile/notiSettings/NotiSettings";
import { TransitionConfiguration } from "../transitionConfig";
const ProfileNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    NotiSettings: {
      screen: NotiSettingsScreen
    },
  },
  {
    headerMode: "none",
    // initialRouteName:'ProfileScreen',
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(ProfileNavigator);
