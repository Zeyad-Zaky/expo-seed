import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import colors from 'styles/colors';
import FontAwesome from '../reusable/FontAwesome';

import LeaderboardNavigation from './LeaderboardNavigation';
import NewsfeedStack from './NewsfeedStack';
import MatchStack from './MatchStack';

const { width } = Dimensions.get('window');
const routeIcons = {
  Leaderboard: 'analytics',
  Teams: 'comments-alt',
  Newsfeed: 'globe-americas',
  Matches: 'gamepad',
  Scout: 'users',
};
const TabNavigation = createBottomTabNavigator(
  {
    Leaderboard: {
      screen: LeaderboardNavigation,
    },
    Teams: {
      screen: LeaderboardNavigation,
    },
    Newsfeed: {
      screen: NewsfeedStack,
    },
    Matches: {
      screen: MatchStack,
    },
    Scout: {
      screen: LeaderboardNavigation,
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
    transparentCard: false,
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
        elevation: 30,
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
