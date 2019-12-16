import { USER } from '../actions/types';

const INITIAL_STATE = {
  listUser: []
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.LOGIN_REQUEST: return state;
    case USER.LOGIN_SUCCESS: return state;
    case USER.LOGIN_FAILURE: return state;
    case USER.GET_ALL_USER_REQUEST: return state;
    case USER.GET_ALL_USER_SUCCESS: {
      return { ...state, listUser: action.payload };
    }
    case USER.GET_ALL_USER_FAILURE: return state;
    default: return state;
  }
};

export default User;