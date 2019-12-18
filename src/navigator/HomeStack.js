import { createStackNavigator } from 'react-navigation';

import { NavigationRoutes } from './Routes';
import WelcomeScreen from '../views/Welcome';
import HomeScreen from '../views/Home';
import EasyFirstScreen from '../views/EasyFirst';

const WelcomeStack = createStackNavigator(
  {
    [NavigationRoutes.Welcome]: {
      screen: WelcomeScreen
    },
    [NavigationRoutes.EasyFirst]: {
      screen: EasyFirstScreen
    },
    [NavigationRoutes.Home]: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.Welcome,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default WelcomeStack;