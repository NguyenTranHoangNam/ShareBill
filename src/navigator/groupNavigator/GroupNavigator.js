import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { GroupListScreen } from "../../screens/groups/list/GroupListScreen";
import { GroupDetailsScreen } from "../../screens/groups/details/GroupDetailsScreen";
import { GroupInfoScreen } from "../../screens/groups/info/GroupInfoScreen";
import { TransitionConfiguration } from "../transitionConfig";
import  {GroupAddScreen}  from "../../screens/groups/add/GroupAddScreen";
import { AddMemberScreen } from "../../screens/groups/addMember/AddMemberScreen";
import { GroupSearchScreen } from "../../screens/groups/search/GroupSearchScreen";
import { ChooseMembersScreen } from "../../screens/groups/chooseMembers/ChooseMembersScreen";

const GroupNavigator = createStackNavigator(
  {
    ListGroup: {
      screen: GroupListScreen
    },
    GroupDetails: {
      screen: GroupDetailsScreen
    },
    GroupInfo: {
      screen: GroupInfoScreen
    },
    CreateGroup: {
      screen: GroupAddScreen
    },
    AddMember:{
      screen: AddMemberScreen
    },
    GroupSearch:{
      screen: GroupSearchScreen
    },
    ChooseMembers:{
      screen:ChooseMembersScreen
    }
  },
  {
    headerMode: "none",
    // initialRouteName:'CreateGroup',
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(GroupNavigator);
