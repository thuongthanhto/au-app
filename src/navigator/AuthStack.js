import {createStackNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import LoginScreen from '../views/Login';
import WelcomeScreen from '../views/BasicInfo/Welcome';
import LegalStuffScreen from '../views/BasicInfo/LegalStuff';

const AuthStack = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: LegalStuffScreen,
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
