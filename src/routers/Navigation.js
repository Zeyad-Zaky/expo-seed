import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loader from 'components/Loader';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';
import Screen from 'components/Screen';

const Navigation = createAppContainer(
  createSwitchNavigator({
    //Screen:screen,
    loading: Loader,
    StackNavigation,
  })
);

export default Navigation;
