import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ListGroup } from '../../screens/listGroup/details/ListGroup';
import { colors } from '../../utils/color';
import { ListFriends } from '../../screens/listFriends/ListFriends';
import { HistoryScreen } from '../../screens/history/details/HistoryScreen';
import { InformationScreen } from '../../screens/information/details/InformationScreen';
import { TransactionDetailScreen } from '../../screens/transaction/detail/TransactionDetailScreen';
import CustomTabNavigation from '../customTabNavigation/CustomTabNavigation';
import { GroupDetails } from '../../screens/groupDetails/details/GroupDetails';
import { GroupInfo } from '../../screens/groupInfo/details/GroupInfo';
import GroupNavigator from '../groupNavigator/GroupNavigator';
import { SBIconFont } from '../../components/SBComponent';
const TabBarComponent = props => <CustomTabNavigation {...props} />;

export const TabScreens = createBottomTabNavigator(
  {
    'Nhóm': {
        screen: GroupNavigator
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
            return <SBIconFont name={'group'} size={25} color={tintColor} />
        }
        else if (routeName === 'Bạn Bè') {
            return <SBIconFont name={'person'} size={21} color={tintColor} />
        }
        else if (routeName === 'Lịch Sử') {
            return <SBIconFont name={'history'} size={25} color={tintColor} />
        }
        else if (routeName === 'Cá Nhân') {
            return <SBIconFont name={'account-circle'} size={22} color={tintColor} />
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