import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loader from 'components/Loader';
import TabNavigation from './TabNavigation';

const Navigation = createAppContainer(
  createSwitchNavigator({
    loading: Loader,
    TabNavigation,
  })
);

export default Navigation;
