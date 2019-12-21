import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../views/Search';
import { NavigationRoutes } from './Routes';
import { MainNavigationHeader } from './DefaultNavigationOptions';

const SearchStack = createStackNavigator(
  {
    [NavigationRoutes.Search]: {
      screen: SearchScreen,
      navigationOptions: (props) => ({
        ...MainNavigationHeader(props, 'Home', 'Meal(0)', 'Food Search')
      })
    }
  },
  {
    initialRouteName: NavigationRoutes.Search,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default SearchStack;