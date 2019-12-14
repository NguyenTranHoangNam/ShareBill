import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { GroupListScreen } from "../../screens/groups/list/GroupListScreen";
import { GroupDetailsScreen } from "../../screens/groups/details/GroupDetailsScreen";
import { GroupInfoScreen } from "../../screens/groups/info/GroupInfoScreen";
import { TransitionConfiguration } from "../transitionConfig";
import  {GroupAddScreen}  from "../../screens/groups/add/GroupAddScreen";
import { MemberInfoInput } from "../../screens/groups/addMember/components/addMember/MemberInfoInput";
import { AddMemberScreen } from "../../screens/groups/addMember/AddMemberScreen";

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
    }
  },
  {
    headerMode: "none",
    // initialRouteName:'CreateGroup',
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(GroupNavigator);
