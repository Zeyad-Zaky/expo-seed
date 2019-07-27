import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loader from 'components/Loader';
import DrawerNavigation from './DrawerNavigation';
import StartNavigation from './startNavigation';

const Navigation = createAppContainer(
  createSwitchNavigator({
    loading: Loader,
    DrawerNavigation,
    StartNavigation,
  })
);

export default Navigation;
