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
const TabBarComponent = props => <BottomTabBar {...props} />;

export const TabScreens = createBottomTabNavigator(
  {
    ListGroup: {
        screen: ListGroup
      },
    ListFriends: {
        screen: ListFriends
      }, 
    Transaction: {
        screen:TransactionDetailScreen, // Empty screen
       
    },
    History: {
        screen: HistoryScreen
    },
    Information: {
        screen: InformationScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'ListGroup') {
            return <IconMaterialIcons name={'group'} size={25} color={tintColor} />
        }
        else if (routeName === 'ListFriends') {
            return <IconFontAwesome5 name={'user'} size={21} color={tintColor} />
        }
        else if (routeName === 'History') {
            return <IconMaterialIcons name={'history'} size={25} color={tintColor} />
        }
        else if (routeName === 'Information') {
            return <IconFontAwesome name={'user-circle-o'} size={22} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.mainLight,
      inactiveTintColor: 'gray',
      activeBackgroundColor:colors.tabbar,
      inactiveBackgroundColor:colors.tabbar,
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);