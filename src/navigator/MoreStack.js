import {createStackNavigator} from 'react-navigation';

import MoreScreen from '../views/More';
import {NavigationRoutes} from './Routes';
import {MainNavigationHeader} from './DefaultNavigationOptions';
import AboutkJsScreen from '../views/More/AboutkJs';
import KilojoulesAndKidsScreen from '../views/More/KilojoulesAndKids';
import AboutTheCampaignScreen from '../views/More/AboutTheCampaign';
import WhichOutletsScreen from '../views/More/WhichOutlets';

const MoreStack = createStackNavigator(
  {
    [NavigationRoutes.More]: {
      screen: MoreScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', null, 'More'),
      }),
    },
    [NavigationRoutes.AboutkJs]: {
      screen: AboutkJsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Done', null, 'More', true),
      }),
    },
    [NavigationRoutes.KilojoulesAndKids]: {
      screen: KilojoulesAndKidsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Done', null, 'More', true),
      }),
    },
    [NavigationRoutes.AboutTheCampaign]: {
      screen: AboutTheCampaignScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Done', null, 'More', true),
      }),
    },
    [NavigationRoutes.WhichOutlets]: {
      screen: WhichOutletsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Done', null, 'More', true),
      }),
    },
  },
  {
    initialRouteName: NavigationRoutes.More,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default MoreStack;
