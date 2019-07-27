import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Header from 'reusable/Header';
import Match from '../components/Screen/views/Match';
import CreateMatch from '../components/Screen/views/CreateMatch';
import JoinMatches from '../components/Screen/views/JoinMatches';
import MatchInfo from '../components/Screen/views/MatchInfo';
import QRCodeScanner from '../components/Screen/views/QRCodeScanner';
import Rating from '../components/Rating';

const MatchStack = createStackNavigator(
  {
    main: {
      screen: Match,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    createMatch: {
      screen: CreateMatch,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    joinMatches: {
      screen: JoinMatches,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    matchInfo: {
      screen: MatchInfo,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    qrCodeScanner: {
      screen: QRCodeScanner,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    rating: {
      screen: Rating,
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

export default MatchStack;
