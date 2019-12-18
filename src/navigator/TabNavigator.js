import { createBottomTabNavigator } from 'react-navigation';

import MoreStack from './MoreStack';
import BurnkJStack from './BurnkJStack';
import SearchStack from './SearchStack';
import { NavigationRoutes } from './Routes';
import ConverterStack from './ConverterStack';
import IdealFigureStack from './IdealFigureStack';

export default createBottomTabNavigator({
  [NavigationRoutes.Search]: {
    screen: SearchStack
  },
  [NavigationRoutes.IdealFigure]: {
    screen: IdealFigureStack
  },
  [NavigationRoutes.Converter]: {
    screen: ConverterStack
  },
  [NavigationRoutes.BurnkJ]: {
    screen: BurnkJStack
  },
  [NavigationRoutes.More]: {
    screen: MoreStack
  }
});
