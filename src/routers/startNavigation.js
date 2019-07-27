import { createStackNavigator } from 'react-navigation';
import Login from '../components/Screen/views/Login';

const StackNavigation = createStackNavigator(
  {
    login: {
      screen: Login,
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

export default StackNavigation;
