import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './HomeStack';
import ScheduleStack from './ScheduleStack';
import { NavigationRoutes } from './Routes';

export default createBottomTabNavigator({
	[NavigationRoutes.Schedule]: {
    screen: ScheduleStack
  },
  [NavigationRoutes.Home]: {
    screen: HomeStack
  }
});
