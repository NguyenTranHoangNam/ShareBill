import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { TransitionConfiguration } from "../transitionConfig";
import { ListFriendsScreen } from "../../screens/listFriends/details/ListFriends";
import { FriendInfoScreen } from "../../screens/listFriends/info/FriendInfoScreen";
import { GroupDetailsScreen } from "../../screens/group/details/GroupDetailsScreen";

const FriendsNavigator = createStackNavigator(
  {
    ListFriends: {
      screen: ListFriendsScreen
    },
    FriendInfo: {
      screen: FriendInfoScreen
    },
    GroupDetails: {
      screen: GroupDetailsScreen
    },
  },
  {
    headerMode: "none",
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(FriendsNavigator);
