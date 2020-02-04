import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import { getAll as getAllService } from '../services/Search';
import { SEARCH } from '../actions/types';
import { 
  getAllCategoriesSuccess, getAllCategoriesFailure,
  getTypeOfFoodAvailableSuccess, getTypeOfFoodAvailableFailure
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

function* watchGetAllCategories() {
  yield takeEvery(SEARCH.GET_ALL_CATEGORIES_REQUEST, handleGetAllCategories);
};

function* watchGetTypeOfFoodAvailable() {
  yield takeEvery(SEARCH.GET_TYPE_OF_FOOD_REQUEST, handleGetTypeOfFoodAvailable);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCategories),
    fork(watchGetTypeOfFoodAvailable),
  ]);
}