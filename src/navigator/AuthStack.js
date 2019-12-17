import {createStackNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import LoginScreen from '../views/Login';
import WelcomeScreen from '../views/MyIdealFigure/Welcome';

const AuthStack = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: NavigationRoutes.Login,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default AuthStack;
