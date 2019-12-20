import {createBottomTabNavigator} from 'react-navigation';
import {Image} from 'react-native';
import React from 'react';

import MoreStack from './MoreStack';
import BurnkJStack from './BurnkJStack';
import SearchStack from './SearchStack';
import {NavigationRoutes} from './Routes';
import ConverterStack from './ConverterStack';
import IdealFigureStack from './IdealFigureStack';
import {Images} from '../assets/images';
import Responsive from '../modules/utils/responsive';

const getTabBarIcon = (navigation, focused) => {
  const {routeName} = navigation.state;
  let iconName = '';

  if (routeName === NavigationRoutes.BurnkJ) {
    iconName = !focused ? 'burn' : `burn_on`;
  } else if (routeName === NavigationRoutes.IdealFigure) {
    iconName = !focused ? 'ideal_figure' : `ideal_figure_on`;
  } else {
    iconName = !focused
      ? routeName.toLowerCase()
      : `${routeName.toLowerCase()}_on`;
  }

  return (
    <Image
      source={Images[iconName]}
      style={{
        width: 25,
        height: 25,
        paddingVertical: Responsive.v(10),
      }}
    />
  );
};

export default createBottomTabNavigator(
  {
    [NavigationRoutes.Search]: {
      screen: SearchStack,
    },
    [NavigationRoutes.IdealFigure]: {
      screen: IdealFigureStack,
    },
    [NavigationRoutes.Converter]: {
      screen: ConverterStack,
    },
    [NavigationRoutes.BurnkJ]: {
      screen: BurnkJStack,
    },
    [NavigationRoutes.More]: {
      screen: MoreStack,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => getTabBarIcon(navigation, focused),
    }),
    tabBarOptions: {
      inactiveTintColor: 'white',
      activeTintColor: 'white',
      allowFontScaling: true,
      activeBackgroundColor: 'black',
      inactiveBackgroundColor: 'black',
    },
  },
);
