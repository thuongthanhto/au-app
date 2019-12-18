import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './AuthLoading';
import HomeStack from './HomeStack';
import { NavigationRoutes } from './Routes';
import TabBottom from './TabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    HomeStack,
    TabBottom
  },{
    initialRouteName: NavigationRoutes.AuthLoading
  })
);