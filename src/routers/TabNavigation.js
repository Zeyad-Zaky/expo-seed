import { createBottomTabNavigator } from 'react-navigation';
import colors from 'styles/colors';
import Screen from 'components/Screen';


const TabNavigation = createBottomTabNavigator(
  {
    main: {screen: Screen}
  },
  {

    lazy: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.purple,
      inactiveTintColor: colors.purple,
    },
  }
);

export default TabNavigation;
