import {createStackNavigator} from 'react-navigation';

import { NavigationRoutes } from './Routes';
import WelcomeScreen from '../views/BasicInfo/Welcome';
import HomeScreen from '../views/Home';
import UserInfoScreen from '../views/BasicInfo/UserInfo';
import LegalStuffScreen from '../views/BasicInfo/LegalStuff';

const WelcomeStack = createStackNavigator(
  {
    [NavigationRoutes.Welcome]: {
      screen: WelcomeScreen
    },
    [NavigationRoutes.UserInfo]: {
      screen: UserInfoScreen
    },
    [NavigationRoutes.Home]: {
      screen: HomeScreen
    },
    [NavigationRoutes.LegalStuff]: {
      screen: LegalStuffScreen
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
