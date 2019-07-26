import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loader from 'components/Loader';
import DrawerNavigation from './DrawerNavigation';

const Navigation = createAppContainer(
  createSwitchNavigator({
    loading: Loader,
    DrawerNavigation,
  })
);

export default Navigation;
