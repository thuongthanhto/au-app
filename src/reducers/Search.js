import {SEARCH} from '../actions/types';

const INITIAL_STATE = {
  listCategory: [],
  listTypeOfFood: [],
  listProducts: {},
  listMealAdded: []
};

const formatResult = (listResult) => listResult.map(item => ({
  ...item,
  quantity: 1,
  consume: item.Energy,
  isAdded: false
}));

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH.GET_TYPE_OF_FOOD_REQUEST:
      return state;
    case SEARCH.GET_TYPE_OF_FOOD_FAILURE:
      return state;
    case SEARCH.GET_TYPE_OF_FOOD_SUCCESS:
      return {...state, listTypeOfFood: action.payload};

    case SEARCH.GET_ALL_CATEGORIES_REQUEST:
      return state;
    case SEARCH.GET_ALL_CATEGORIES_FAILURE:
      return state;
    case SEARCH.GET_ALL_CATEGORIES_SUCCESS:
      return {...state, listCategory: action.payload};

    case SEARCH.GET_PRODUCTS_REQUEST:
      return state;
    case SEARCH.GET_PRODUCTS_FAILURE:
      return state;
    case SEARCH.GET_PRODUCTS_SUCCESS: {
      return {
        ...state, 
        listProducts: {
          AllCategories: action.payload.AllCategories,
          AllQSRs: action.payload.AllQSRs,
          Results: formatResult(action.payload.Results)
        }
      };
    }
    
    default:
      return state;
  }
};

export default User;
