import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { ListGroup } from '../../screens/listGroup/details/ListGroup';
import { colors } from '../../utils/color';
import { ListFriends } from '../../screens/listFriends/ListFriends';
import { HistoryScreen } from '../../screens/history/details/HistoryScreen';
import { InformationScreen } from '../../screens/information/details/InformationScreen';
import { TransactionDetailScreen } from '../../screens/transaction/detail/TransactionDetailScreen';
import CustomTabNavigation from '../customTabNavigation/CustomTabNavigation';
import { GroupDetails } from '../../screens/groupDetails/details/GroupDetails';
const TabBarComponent = props => <CustomTabNavigation {...props} />;

export const TabScreens = createBottomTabNavigator(
  {
    'Nhóm': {
        screen: GroupDetails//ListGroup
      },
    'Bạn Bè': {
        screen: ListFriends
      }, 
    'Giao dịch': {
        screen:TransactionDetailScreen, // Empty screen
       
    },
    'Lịch Sử': {
        screen: HistoryScreen
    },
    'Cá Nhân': {
        screen: InformationScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Nhóm') {
            return <IconMaterialIcons name={'group'} size={25} color={tintColor} />
        }
        else if (routeName === 'Bạn Bè') {
            return <IconFontAwesome5 name={'user'} size={21} color={tintColor} />
        }
        else if (routeName === 'Lịch Sử') {
            return <IconMaterialIcons name={'history'} size={25} color={tintColor} />
        }
        else if (routeName === 'Cá Nhân') {
            return <IconFontAwesome name={'user-circle-o'} size={22} color={tintColor} />
        }
      },
    }),
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
      activeTintColor: colors.mainLight,
      inactiveTintColor: 'gray',
      activeBackgroundColor:colors.tabbar,
      inactiveBackgroundColor:colors.tabbar,
    },
  },
);