import {createStackNavigator} from 'react-navigation';

import SearchScreen from '../views/Search';
import {NavigationRoutes} from './Routes';
import {MainNavigationHeader} from './DefaultNavigationOptions';
import SearchFormScreen from '../views/Search/SearchForm';

const SearchStack = createStackNavigator(
  {
    [NavigationRoutes.SearchForm]: {
      screen: SearchFormScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', 'Meal(0)', 'Food Search'),
      }),
    },
    [NavigationRoutes.Search]: {
      screen: SearchScreen,
      navigationOptions: props => ({
        ...MainNavigationHeader(props, 'Home', 'Meal(0)', 'Food Search'),
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
