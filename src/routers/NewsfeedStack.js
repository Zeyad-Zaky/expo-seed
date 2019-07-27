import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Header from 'reusable/Header';
import Newsfeed from '../components/Screen/views/Newsfeed';

const StackNavigation = createStackNavigator(
  {
    main: {
      screen: Newsfeed,
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
    transparentCard: false,
  }
);

export default StackNavigation;
