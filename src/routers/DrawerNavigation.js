import { createDrawerNavigator } from 'react-navigation';
import TabNavigation from './TabNavigation';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigation,
    },
  },
  {
    headerMode: 'none',
    cardStyle: { backgroundColor: 'transparent' },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
    transparentCard: true,
  }
);

export default DrawerNavigator;
