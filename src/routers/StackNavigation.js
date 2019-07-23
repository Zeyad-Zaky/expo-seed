import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Header from 'reusable/Header';
import Screen from 'components/Screen';

const StackNavigation = createStackNavigator(
  {
    main: {
      screen: Screen,
      navigationOptions: {
        header: () => <Header title="Sign In" />,
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
