import { combineReducers } from 'redux';

import UserReducer from './User';
import ScheduleReducer from './Schedule';

export default combineReducers({
  UserReducer,
  ScheduleReducer
});