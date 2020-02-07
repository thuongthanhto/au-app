import {SEARCH} from './types';

export const getAllCategoriesRequest = (params = '', cb) => ({
  type: SEARCH.GET_ALL_CATEGORIES_REQUEST,
  payload: {params},
  cb,
});
export const getAllCategoriesSuccess = (payload, cb) => ({
  type: SEARCH.GET_ALL_CATEGORIES_SUCCESS,
  payload,
  cb,
});
export const getAllCategoriesFailure = (error, cb) => ({
  type: SEARCH.GET_ALL_CATEGORIES_FAILURE,
  payload: {error},
  cb,
});

export const getTypeOfFoodAvailableRequest = (params = '', cb) => ({
  type: SEARCH.GET_TYPE_OF_FOOD_REQUEST,
  payload: {params},
  cb,
});
export const getTypeOfFoodAvailableSuccess = (payload, cb) => ({
  type: SEARCH.GET_TYPE_OF_FOOD_SUCCESS,
  payload,
  cb,
});
export const getTypeOfFoodAvailableFailure = (error, cb) => ({
  type: SEARCH.GET_TYPE_OF_FOOD_FAILURE,
  payload: {error},
  cb,
});

export const getProductsRequest = (params = {}, cb) => ({
  type: SEARCH.GET_PRODUCTS_REQUEST,
  payload: {params},
  cb,
});
export const getProductsSuccess = (payload, cb) => ({
  type: SEARCH.GET_PRODUCTS_SUCCESS,
  payload,
  cb,
});
export const getProductsFailure = (error, cb) => ({
  type: SEARCH.GET_PRODUCTS_FAILURE,
  payload: {error},
  cb,
});
