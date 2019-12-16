import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../views/Home';
import { NavigationRoutes } from './Routes';
import FavouriteUserScreen from '../views/Home/FavouriteUser';

const HomeStack = createStackNavigator(
  {
    [NavigationRoutes.Home]: {
      screen: HomeScreen
    },
    [NavigationRoutes.FavouriteUser]: {
      screen: FavouriteUserScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.Home,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const HomeRootScreen = createStackNavigator(
  {
    [NavigationRoutes.Home]: {
      screen: HomeStack
    }
  },
  {
    initialRouteName: NavigationRoutes.Home,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default HomeRootScreen;