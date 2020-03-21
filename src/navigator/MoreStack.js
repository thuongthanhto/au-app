import {createStackNavigator} from 'react-navigation';

import MoreScreen from '../views/More';
import {NavigationRoutes} from './Routes';
import {MainNavigationHeader} from './DefaultNavigationOptions';
import AboutkJsScreen from '../views/More/AboutkJs';
import KilojoulesAndKidsScreen from '../views/More/KilojoulesAndKids';
import AboutTheCampaignScreen from '../views/More/AboutTheCampaign';
import WhichOutletsScreen from '../views/More/WhichOutlets';
import ProfileScreen from '../views/More/Profile';
import LegalStuffMore from '../views/More/LegalStuffMore';

const MoreStack = createStackNavigator(
  {
    [NavigationRoutes.More]: {
      screen: MoreScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', null, 'More'),
      }),
    },
    [NavigationRoutes.Profile]: {
      screen: ProfileScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', null, 'Profile'),
      }),
    },
    [NavigationRoutes.AboutkJs]: {
      screen: AboutkJsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Back', null, 'About kJs', true),
      }),
    },
    [NavigationRoutes.KilojoulesAndKids]: {
      screen: KilojoulesAndKidsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(
          props,
          'Back',
          null,
          'Kilojoules and kids',
          true,
        ),
      }),
    },
    [NavigationRoutes.AboutTheCampaign]: {
      screen: AboutTheCampaignScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(
          props,
          'Back',
          null,
          'About the campaign',
          true,
        ),
      }),
    },
    [NavigationRoutes.WhichOutlets]: {
      screen: WhichOutletsScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Back', null, 'Which outlets?', true),
      }),
    },
    [NavigationRoutes.LegalStuffMore]: {
      screen: LegalStuffMore,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Back', null, 'Legal Stuff', true),
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
