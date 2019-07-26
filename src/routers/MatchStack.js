import { createStackNavigator } from 'react-navigation';
import Rating from '../components/Rating';

const MatchStack = createStackNavigator(
  {
    main: {
      screen: Rating,
      navigationOptions: {
        header: null,
      },
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

export default MatchStack;
