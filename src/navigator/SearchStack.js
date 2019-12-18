import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../views/Search';
import { NavigationRoutes } from './Routes';

const SearchStack = createStackNavigator(
  {
    [NavigationRoutes.Search]: {
      screen: SearchScreen
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