import { createStackNavigator } from 'react-navigation';

import BurnkJScreen from '../views/BurnkJ';
import { NavigationRoutes } from './Routes';
import { MainNavigationHeader } from './DefaultNavigationOptions';

const BurnkJStack = createStackNavigator(
  {
    [NavigationRoutes.BurnkJ]: {
      screen: BurnkJScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Home', null, 'Burn kJ')
      })
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