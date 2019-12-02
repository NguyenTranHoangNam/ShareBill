import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { colors } from "../../utils/color";
import { HistoryScreen } from "../../screens/history/details/HistoryScreen";
import { InformationScreen } from "../../screens/information/details/InformationScreen";
import CustomTabNavigation from "../customTabNavigation/CustomTabNavigation";
import GroupNavigator from "../groupNavigator/GroupNavigator";
import { SBIconFont } from "../../components/SBComponent";
import FriendsNavigator from "../friendsNavigator/FriendsNavigator";
import TransactionNavigator from "../transactionNavigator/TransactionNavigator";
const TabBarComponent = props => <CustomTabNavigation {...props} />;

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
      navigationOptions: {
        tabBarVisible: false
      }
    },
    "Lịch Sử": {
      screen: HistoryScreen
    },
    "Cá Nhân": {
      screen: InformationScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarVisible: true,
      // navigation.state.routes != undefined && navigation.state.routes[navigation.state.routes.length - 1].routeName === 'Giao dịch'
      //     || navigation.state.routes != undefined && navigation.state.routes[navigation.state.routes.length - 1].routeName === 'GroupInfo'
      //     ? false : true,
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
