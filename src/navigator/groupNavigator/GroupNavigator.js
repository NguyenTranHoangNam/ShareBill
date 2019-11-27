import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { GroupListScreen } from "../../screens/group/list/GroupListScreen";
import { GroupDetailsScreen } from "../../screens/group/details/GroupDetailsScreen";
import { GroupInfoScreen } from "../../screens/group/info/GroupInfoScreen";

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
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(GroupNavigator);
