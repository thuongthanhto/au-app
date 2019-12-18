import { createStackNavigator } from 'react-navigation';

import IdealFigureScreen from '../views/IdealFigure';
import { NavigationRoutes } from './Routes';

const IdealFigureStack = createStackNavigator(
  {
    [NavigationRoutes.IdealFigure]: {
      screen: IdealFigureScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.IdealFigure,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default IdealFigureStack;