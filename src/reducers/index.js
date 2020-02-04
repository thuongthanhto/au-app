import {combineReducers} from 'redux';

import UserReducer from './User';
import ScheduleReducer from './Schedule';
import homeReducer from './homeReduder';
import SearchReducer from './Search';

export default combineReducers({
  UserReducer,
  ScheduleReducer,
  homeReducer,
  SearchReducer
});
