import { createStackNavigator } from 'react-navigation';

import ConverterScreen from '../views/Converter';
import { NavigationRoutes } from './Routes';

const ConverterStack = createStackNavigator(
  {
    [NavigationRoutes.Converter]: {
      screen: ConverterScreen
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