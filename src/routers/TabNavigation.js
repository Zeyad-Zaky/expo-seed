import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import colors from 'styles/colors';
import Screen from 'components/Screen';
import FontAwesome from '../reusable/FontAwesome';

import StackNavigation from './StackNavigation';

const { width } = Dimensions.get('window');
const routeIcons = {
  Home: 'analytics',
  Messages: 'comments-alt',
  Globe: 'globe-americas',
  Field: 'gamepad',
  People: 'users',
};
const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: StackNavigation,
    },
    Messages: {
      screen: StackNavigation,
    },
    Globe: {
      screen: StackNavigation,
    },
    Field: {
      screen: StackNavigation,
    },
    People: {
      screen: StackNavigation,
    },
  },
  {
    defaultNavigationOptions: ({
      navigation: {
        state: { routeName },
      },
    }) => ({
      tabBarIcon: ({ focused }) => (
        <FontAwesome icon={routeIcons[routeName]} size={19} focused={focused} color="white" />
      ),
    }),
    headerMode: 'none',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 0,
        height: 60,
        width,
        borderTopWidth: 0,
        zIndex: 100000,
        right: 0,
        left: 0,
      },
      showLabel: false,
      activeTintColor: colors.purple,
      inactiveTintColor: colors.purple,
    },
  }
);

export default TabNavigation;
