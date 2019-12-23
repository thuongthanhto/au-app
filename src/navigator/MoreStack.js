import { createStackNavigator } from 'react-navigation';

import MoreScreen from '../views/More';
import { NavigationRoutes } from './Routes';
import { MainNavigationHeader } from './DefaultNavigationOptions';
import WhichOutletsScreen from '../views/More/WhichOutlets';

const MoreStack = createStackNavigator(
  {
    [NavigationRoutes.More]: {
      screen: MoreScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Home', null, 'More')
      })
    },
    [NavigationRoutes.WhichOutlets]: {
      screen: WhichOutletsScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Done', null, 'More', true)
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