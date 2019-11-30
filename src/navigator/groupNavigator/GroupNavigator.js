import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { GroupListScreen } from "../../screens/group/list/GroupListScreen";
import { GroupDetailsScreen } from "../../screens/group/details/GroupDetailsScreen";
import { GroupInfoScreen } from "../../screens/group/info/GroupInfoScreen";
import { TransitionConfiguration } from "../transitionConfig";
import { GroupAddScreen } from "../../screens/group/add/GroupAddScreen";
import { SBAddMember } from "../../screens/group/addMember/components/addMember/SBAddMember";

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
    GroupAdd: {
      screen: GroupAddScreen
    }
  },
  {
    headerMode: "none",
    // initialRouteName:'GroupAdd',
    transitionConfig:TransitionConfiguration
  }
);

export default createAppContainer(GroupNavigator);
