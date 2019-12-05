import { createStackNavigator } from 'react-navigation-stack';
import { Login, Dashboard } from '../../page';

const RootNav = createStackNavigator(
  {
    dashboard: { screen: Dashboard },
    login: { screen: Login },
  },
  {
    initialRouteName: 'dashboard',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default RootNav;
