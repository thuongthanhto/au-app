import { all } from 'redux-saga/effects';

import UserSaga from './User';
import ScheduleSaga from './Schedule';

export default function* rootSaga() {
  yield all([
    UserSaga(),
    ScheduleSaga()
  ]);
};