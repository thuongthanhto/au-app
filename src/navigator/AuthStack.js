import { createStackNavigator } from 'react-navigation';

import { NavigationRoutes } from './Routes';
import LoginScreen from '../views/Login';

const AuthStack = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.Login,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AuthStack;