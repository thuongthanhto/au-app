import { createStackNavigator } from 'react-navigation';

import ConverterScreen from '../views/Converter';
import { NavigationRoutes } from './Routes';
import { MainNavigationHeader } from './DefaultNavigationOptions';

const ConverterStack = createStackNavigator(
  {
    [NavigationRoutes.Converter]: {
      screen: ConverterScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Home', 'Inputs', 'Converter')
      })
    }
  },
  {
    initialRouteName: NavigationRoutes.Converter,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default ConverterStack;