import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { GroupListScreen } from "../../screens/group/list/GroupListScreen";
import { GroupDetailsScreen } from "../../screens/group/details/GroupDetailsScreen";
import { GroupInfoScreen } from "../../screens/group/info/GroupInfoScreen";
import { TransitionConfiguration } from "../transitionConfig";
import  {GroupAddScreen}  from "../../screens/group/add/GroupAddScreen";
import { MemberInfoInput } from "../../screens/group/addMember/components/addMember/MemberInfoInput";
import { AddMemberScreen } from "../../screens/group/addMember/AddMemberScreen";

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
