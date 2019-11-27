import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ListGroup } from "../../screens/listGroup/details/ListGroup";
import { GroupDetails } from "../../screens/groupDetails/details/GroupDetails";
import { GroupInfo } from "../../screens/groupInfo/details/GroupInfo";

const GroupNavigator = createStackNavigator(
  {
    ListGroup: {
      screen: ListGroup
    },
    GroupDetails: {
      screen: GroupDetails
    },
    GroupInfo: {
      screen: GroupInfo
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(GroupNavigator);
