import { createBottomTabNavigator } from 'react-navigation';

import MoreStack from './MoreStack';
import BurnkJStack from './BurnkJStack';
import SearchStack from './SearchStack';
import { NavigationRoutes } from './Routes';
import ConverterStack from './ConverterStack';
import IdealFigureStack from './IdealFigureStack';

export default createBottomTabNavigator({
  [NavigationRoutes.IdealFigure]: {
    screen: IdealFigureStack
  },
  [NavigationRoutes.More]: {
    screen: MoreStack
  },
  [NavigationRoutes.BurnkJ]: {
    screen: BurnkJStack
  },
  [NavigationRoutes.Search]: {
    screen: SearchStack
  },
  [NavigationRoutes.Converter]: {
    screen: ConverterStack
  }
});
