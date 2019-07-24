import { createDrawerNavigator } from 'react-navigation';
import TabNavigation from '../TabNavigation';

import DrawerContainer from './DrawerContainer';

const DrawerNavigator = createDrawerNavigator(
  {
    Matches: {
      screen: TabNavigation,
    },
    Invitations: {
      screen: TabNavigation,
    },
    Social: {
      screen: TabNavigation,
    },
    Events: {
      screen: TabNavigation,
    },
    Shop: {
      screen: TabNavigation,
    },
    Settings: {
      screen: TabNavigation,
    },
    'About Us': {
      screen: TabNavigation,
    },
  },
  {
    contentComponent: DrawerContainer,
    headerMode: 'none',

    drawerBackgroundColor: 'transparent ',
    cardStyle: { backgroundColor: 'transparent' },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
    contentOptions: {
      itemsContainerStyle: {},
      itemStyle: { color: 'white', borderBottomWidth: 1, borderColor: 'white' },
      labelStyle: { color: 'white' },
      iconContainerStyle: {},
    },
    transparentCard: true,
  }
);

export default DrawerNavigator;
