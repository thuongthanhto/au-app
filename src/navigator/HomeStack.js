import {createStackNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import WelcomeScreen from '../views/BasicInfo/Welcome';
import HomeScreen from '../views/BasicInfo/Home';
import UserInfoScreen from '../views/BasicInfo/UserInfo';
import LegalStuffScreen from '../views/BasicInfo/LegalStuff';
import YourIdealFigureScreen from '../views/BasicInfo/YourIdealFigure';
import TabNavigator from './TabNavigator';
import WeightGoalScreen from '../views/BasicInfo/WeightGoal';

const WelcomeStack = createStackNavigator(
  {
    [NavigationRoutes.Welcome]: {
      screen: WelcomeScreen,
    },
    [NavigationRoutes.UserInfo]: {
      screen: UserInfoScreen,
    },
    [NavigationRoutes.Home]: {
      screen: HomeScreen,
    },
    [NavigationRoutes.LegalStuff]: {
      screen: LegalStuffScreen,
    },
    [NavigationRoutes.YourIdealFigure]: {
      screen: YourIdealFigureScreen,
    },
    TabNavigator,
    [NavigationRoutes.WeightGoal]: {
      screen: WeightGoalScreen,
    },
  },
  {
    initialRouteName: NavigationRoutes.Welcome,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default WelcomeStack;
