import { createStackNavigator } from 'react-navigation';

import MoreScreen from '../views/More';
import { NavigationRoutes } from './Routes';

const MoreStack = createStackNavigator(
  {
    [NavigationRoutes.More]: {
      screen: MoreScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.More,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default MoreStack;