import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { colors } from "../../utils/color";
import { HistoryScreen } from "../../screens/history/list/HistoryScreen";
import CustomTabNavigation from "../customTabNavigation/CustomTabNavigation";
import GroupNavigator from "../groupNavigator/GroupNavigator";
import { SBIconFont } from "../../components/SBComponent";
import FriendsNavigator from "../friendsNavigator/FriendsNavigator";
import TransactionNavigator from "../transactionNavigator/TransactionNavigator";
import ProfileNavigator from "../profileNavigator/ProfileNavigator";
const TabBarComponent = props => <CustomTabNavigation {...props} />;

const setVisibleTabbar = navigation => {
  if (navigation.state.routeName === "Giao dịch") {
    return false;
  } else if (navigation.state.routes) {
    const routeName =
      navigation.state.routes[navigation.state.routes.length - 1].routeName;

    if (
      routeName == "GroupInfo" ||
      routeName == "AddMember" ||
      routeName == "CreateGroup" ||
      routeName == "NotiSettings" ||
      routeName == "MyQRCode"
    ) {
      return false;
    }
  }
  return true;
};
export const TabScreens = createBottomTabNavigator(
  {
    "Nhóm": {
      screen: GroupNavigator
    },
    "Bạn Bè": {
      screen: FriendsNavigator
    },
    "Giao dịch": {
      screen: TransactionNavigator,
    },
    "Lịch Sử": {
      screen: HistoryScreen
    },
    "Cá Nhân": {
      screen: ProfileNavigator
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // tabBarVisible: navigation.state.routes != undefined
      // && navigation.state.routes[0].params != undefined
      // && navigation.state.routes[0].params.tabBarVisible === true ?
      // false : navigation.state.routeName === 'Giao dịch' ? false : true,
      tabBarVisible: setVisibleTabbar(navigation),
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Nhóm") {
          return <SBIconFont name={"group"} size={25} color={tintColor} />;
        } else if (routeName === "Bạn Bè") {
          return <SBIconFont name={"person"} size={25} color={tintColor} />;
        } else if (routeName === "Lịch Sử") {
          return <SBIconFont name={"history"} size={25} color={tintColor} />;
        } else if (routeName === "Cá Nhân") {
          return (
            <SBIconFont name={"account-circle"} size={25} color={tintColor} />
          );
        }
      }
    }),
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
      activeTintColor: colors.mainLight,
      inactiveTintColor: "gray",
      activeBackgroundColor: colors.tabbar,
      inactiveBackgroundColor: colors.tabbar
    }
  }
);
