import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import {
  login as loginService,
  getAllUser as getAllUserService
} from '../services/User';
import { USER } from '../actions/types';
import { loginSuccess, loginFailure, getAllUserFailure, getAllUserSuccess } from '../actions/User';

function* handleLogin({payload}) {
  try {
    const {params} = payload;
    const res = yield call(loginService, params);
    yield put(loginSuccess(res));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* handleGetAllUser({payload}) {
  try {
    const {params} = payload;
    const res = yield call(getAllUserService, params);
    yield put(getAllUserSuccess(res.data.results));
  } catch (error) {
    yield put(getAllUserFailure(error));
  }
}

function* watchUserLogin() {
  yield takeEvery(USER.LOGIN_REQUEST, handleLogin);
};

function* watchGetAllUser() {
  yield takeEvery(USER.GET_ALL_USER_REQUEST, handleGetAllUser);
}

export default function* rootSaga() {
  yield all([
    fork(watchUserLogin),
    fork(watchGetAllUser),
  ]);
}