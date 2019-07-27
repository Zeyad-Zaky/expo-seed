import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Header from 'reusable/Header';
import Leaderboard from '../components/Screen/views/Rank';

const StackNavigation = createStackNavigator(
  {
    main: {
      screen: Leaderboard,
      navigationOptions: {
        header: () => <Header />,
      },
    },
  },
  {
    headerMode: 'float',
    cardStyle: { backgroundColor: 'transparent' },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
    transparentCard: true,
  }
);

export default StackNavigation;
