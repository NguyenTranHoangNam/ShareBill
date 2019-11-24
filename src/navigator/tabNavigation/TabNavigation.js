import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ListGroup } from '../../screens/listGroup/ListGroup';
import { colors } from '../../utils/color';

const TabBarComponent = props => <BottomTabBar {...props} />;

export const TabScreens = createBottomTabNavigator(
  {
    ListGroup: {
        screen: ListGroup
      },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'ListGroup') {
            return <IconMaterialIcons name={'group'} size={25} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.mainLight,
      inactiveTintColor: 'gray',
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);