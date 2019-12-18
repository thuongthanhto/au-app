import { createStackNavigator } from 'react-navigation';

import BurnkJScreen from '../views/BurnkJ';
import { NavigationRoutes } from './Routes';

const BurnkJStack = createStackNavigator(
  {
    [NavigationRoutes.BurnkJ]: {
      screen: BurnkJScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.BurnkJ,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default BurnkJStack;