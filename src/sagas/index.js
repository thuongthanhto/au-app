import { all } from 'redux-saga/effects';

import UserSaga from './User';
import ScheduleSaga from './Schedule';
import SearchSaga from './Search';

export default function* rootSaga() {
  yield all([
    UserSaga(),
    ScheduleSaga(),
    SearchSaga()
  ]);
};