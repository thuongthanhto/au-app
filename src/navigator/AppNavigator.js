import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './AuthLoading';
import AuthStack from './AuthStack';
import { NavigationRoutes } from './Routes';
import TabBottom from './TabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    AuthStack,
    TabBottom
  },{
    initialRouteName: NavigationRoutes.AuthLoading
  })
);