import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loader from 'components/Loader';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';

const Navigation = createAppContainer(
  createSwitchNavigator({
    loading: Loader,
    StackNavigation,
  })
);

export default Navigation;
