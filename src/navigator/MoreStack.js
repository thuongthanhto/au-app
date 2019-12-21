import { createStackNavigator } from 'react-navigation';

import MoreScreen from '../views/More';
import { NavigationRoutes } from './Routes';
import { MainNavigationHeader } from './DefaultNavigationOptions';

const MoreStack = createStackNavigator(
  {
    [NavigationRoutes.More]: {
      screen: MoreScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Home', null, 'More')
      })
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