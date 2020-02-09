import {call, put, fork, takeEvery, all, select} from 'redux-saga/effects';
import get from 'lodash.get';

import {getAll as getAllService, getProducts} from '../services/Search';
import {SEARCH} from '../actions/types';
import { toClosest } from '../modules/utils/helpers';
import {
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  getTypeOfFoodAvailableSuccess,
  getTypeOfFoodAvailableFailure,
  getProductsSuccess,
  getProductsFailure,
} from '../actions/Search';

function* handleGetAllCategories({payload}) {
  try {
    const {params} = payload;
    const res = yield call(getAllService, params);
    yield put(getAllCategoriesSuccess(res));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}

function* handleGetTypeOfFoodAvailable({payload}) {
  try {
    const {params} = payload;
    const res = yield call(getAllService, params);
    yield put(getTypeOfFoodAvailableSuccess(res));
  } catch (error) {
    yield put(getTypeOfFoodAvailableFailure(error));
  }
}

function* handleGetProducts({payload, cb}) {
  try {
    const {params} = payload;
    const state = yield select();
    const profile = get(state, 'homeReducer.profile', {});
    const figure = profile.BMR && profile.BMR.goal ? toClosest(profile.BMR.goal.value, 100) : 8700;
    const res = yield call(getProducts, params);
    res.figure = figure;
    yield put(getProductsSuccess(res));
    cb && cb(res);
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* watchGetAllCategories() {
  yield takeEvery(SEARCH.GET_ALL_CATEGORIES_REQUEST, handleGetAllCategories);
}

function* watchGetTypeOfFoodAvailable() {
  yield takeEvery(
    SEARCH.GET_TYPE_OF_FOOD_REQUEST,
    handleGetTypeOfFoodAvailable,
  );
}

function* watchGetProductsAvailable() {
  yield takeEvery(SEARCH.GET_PRODUCTS_REQUEST, handleGetProducts);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCategories),
    fork(watchGetTypeOfFoodAvailable),
    fork(watchGetProductsAvailable),
  ]);
}
