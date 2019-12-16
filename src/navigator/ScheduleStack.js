import { createStackNavigator } from 'react-navigation';

import { NavigationRoutes } from './Routes';
import ScheduleScreen from '../views/Schedule';
import AddNewScheduleScreen from '../views/Schedule/AddSchedule';

const ScheduleStack = createStackNavigator(
  {
    [NavigationRoutes.AddSchedule]: {
      screen: AddNewScheduleScreen
    }
  },
  {
    initialRouteName: NavigationRoutes.AddSchedule,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const ScheduleRootScreen = createStackNavigator(
  {
    [NavigationRoutes.Schedule]: {
      screen: ScheduleScreen
    },
    [NavigationRoutes.AddSchedule]: {
      screen: ScheduleStack
    }
  },
  {
    initialRouteName: NavigationRoutes.Schedule,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default ScheduleRootScreen;