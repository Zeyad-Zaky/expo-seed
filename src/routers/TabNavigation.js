import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import colors from 'styles/colors';
import Screen from 'components/Screen';

const TabNavigation = createStackNavigator(
  {
    main: { screen: Screen },
  }
  // {
  //   lazy: true,
  //   tabBarOptions: {
  //     showLabel: false,
  //     activeTintColor: colors.purple,
  //     inactiveTintColor: colors.purple,
  //   },
  // }
);

export default TabNavigation;
