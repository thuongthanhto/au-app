import {call, put, fork, takeEvery, all, select} from 'redux-saga/effects';
import get from 'lodash.get';

import {getAll as getAllService, getProducts} from '../services/Search';
import {SEARCH} from '../actions/types';
import {toClosest} from '../modules/utils/helpers';
import {
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  getTypeOfFoodAvailableSuccess,
  getTypeOfFoodAvailableFailure,
  getProductsSuccess,
  getProductsFailure,
} from '../actions/Search';
import categoriesData from '../db/categories.json';
import qsrsData from '../db/qsrs.json';
import productsData from '../db/products.json';
import {getCategories, getQsrs, searchProduct} from '../db/dbFunctions';

function* handleGetAllCategories() {
  try {
    yield put(getAllCategoriesSuccess(getCategories(categoriesData)));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}

function* handleGetTypeOfFoodAvailable() {
  try {
    yield put(getTypeOfFoodAvailableSuccess(getQsrs(qsrsData)));
  } catch (error) {
    yield put(getTypeOfFoodAvailableFailure(error));
  }
}

function* handleGetProducts({payload, cb}) {
  try {
    const {params} = payload;
    console.log(params);
    const state = yield select();
    const profile = get(state, 'homeReducer.profile', {});
    const figure =
      profile.BMR && profile.BMR.goal
        ? toClosest(profile.BMR.goal.value, 100)
        : 8700;
    // const res = yield call(getProducts, params);
    const products = searchProduct(
      productsData,
      params.pageSize,
      params.order,
      params.categories,
      params.qsrs,
      params.searchTerm,
    );
    // console.log(res);
    console.log(products);
    // console.log({Results: res.Results, figure});
    yield put(getProductsSuccess({Results: products, figure}));
    cb && cb(products);
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
