import {createStackNavigator} from 'react-navigation';

import SearchScreen from '../views/Search';
import MealScreen from '../views/Search/Meal';
import {NavigationRoutes} from './Routes';
import {MainNavigationHeader} from './DefaultNavigationOptions';
import SearchFormScreen from '../views/Search/SearchForm';

const SearchStack = createStackNavigator(
  {
    [NavigationRoutes.SearchForm]: {
      screen: SearchFormScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', '', 'Food Search'),
      }),
    },
    [NavigationRoutes.Search]: {
      screen: SearchScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Back', 'Meal', 'kL in Food', true),
      }),
    },
    [NavigationRoutes.Meal]: {
      screen: MealScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Back', '', 'kL in Food', true),
      }),
    },
  },
  {
    initialRouteName: NavigationRoutes.SearchForm,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default SearchStack;
