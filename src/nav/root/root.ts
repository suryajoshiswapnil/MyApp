/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { createStackNavigator } from 'react-navigation-stack';
import { Dashboard } from '../../page';

const RootNav = createStackNavigator(
  {
    dashboard: { screen: Dashboard },
  },
  {
    initialRouteName: 'dashboard',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default RootNav;
