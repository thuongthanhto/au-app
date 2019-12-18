import {createStackNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import LoginScreen from '../views/Login';
import WelcomeScreen from '../views/BasicInfo/Welcome';
import LegalStuffScreen from '../views/BasicInfo/LegalStuff';
import UserInfoScreen from '../views/BasicInfo/UserInfo';

const AuthStack = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: UserInfoScreen,
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
