import {SEARCH} from '../actions/types';
import {toClosest} from '../modules/utils/helpers';

const INITIAL_STATE = {
  listCategory: [],
  listTypeOfFood: [],
  listProducts: {},
  listMealAdded: [],
  figure: 8700,
  quantityMeals: 0,
};

const formatResult = (listResult, figure) =>
  listResult.map(item => ({
    ...item,
    quantity: 1,
    consume: item.Energy,
    isAdded: false,
    percent: ((item.Energy / toClosest(figure, 100)) * 100).toFixed(1),
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
          Results: formatResult(action.payload.Results, action.payload.figure),
        },
        figure: action.payload.figure,
      };
    }

    case 'ADD_TO_MEAL': {
      return {
        ...state,
        listMealAdded: [...state.listMealAdded, action.payload],
        quantityMeals: state.quantityMeals + 1,
      };
    }
    case 'REMOVE_FROM_MEAL': {
      return {
        ...state,

        listMealAdded: [
          ...state.listMealAdded.slice(0, action.payload),
          ...state.listMealAdded.slice(action.payload + 1),
        ],
        quantityMeals: state.listMealAdded.length - 1,
      };
    }

    default:
      return state;
  }
};

export default User;
