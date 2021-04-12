import {createStackNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import IdealFigureScreen from '../views/IdealFigure';
import {MainNavigationHeader} from './DefaultNavigationOptions';

const IdealFigureStack = createStackNavigator(
  {
    [NavigationRoutes.IdealFigure]: {
      screen: IdealFigureScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', 'Inputs', 'KJ calculator'),
      }),
    },
  },
  {
    initialRouteName: NavigationRoutes.IdealFigure,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default IdealFigureStack;
