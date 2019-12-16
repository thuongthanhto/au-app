import { baseCombineActionTypes } from './baseTypes';

export const USER = {
  ...baseCombineActionTypes('LOGIN'),
  ...baseCombineActionTypes('PROFILE'),
  ...baseCombineActionTypes('GET_ALL_USER')
};

export const HOME = {
  ...baseCombineActionTypes('GET_ALL_PRODUCT')
};

export const SCHEDULE = {
  ...baseCombineActionTypes('ADD_TASK'),
  ...baseCombineActionTypes('EDIT_TASK'),
  ...baseCombineActionTypes('SEARCH_TASK'),
  ...baseCombineActionTypes('REMOVE_TASK'),
  ...baseCombineActionTypes('GET_ALL_TASK'),
  ...baseCombineActionTypes('BOOK_MARK_TASK'),
  ...baseCombineActionTypes('UPDATE_TASK_STATUS'),
};