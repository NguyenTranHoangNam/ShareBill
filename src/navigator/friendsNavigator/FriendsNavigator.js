import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { TransitionConfiguration } from "../transitionConfig";
import { ListFriendsScreen } from "../../screens/friends/list/ListFriends";
import { FriendInfoScreen } from "../../screens/friends/info/FriendInfoScreen";
import { GroupDetailsScreen } from "../../screens/groups/details/GroupDetailsScreen";
import { FriendsSearchScreen } from "../../screens/friends/search/FriendsSearchScreen";

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
    FriendsSearch:{
      screen: FriendsSearchScreen
    }
  },
  {
    headerMode: "none",
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(FriendsNavigator);
