import { SEARCH } from '../actions/types';

const INITIAL_STATE = {
  listCategory: [],
  listTypeOfFood: []
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH.GET_TYPE_OF_FOOD_REQUEST: return state;
    case SEARCH.GET_TYPE_OF_FOOD_FAILURE: return state;
    case SEARCH.GET_TYPE_OF_FOOD_SUCCESS: return { ...state, listTypeOfFood: action.payload };

    case SEARCH.GET_ALL_CATEGORIES_REQUEST: return state;
    case SEARCH.GET_ALL_CATEGORIES_FAILURE: return state;
    case SEARCH.GET_ALL_CATEGORIES_SUCCESS: return { ...state, listCategory: action.payload };

    default: return state;
  }
};

export default User;