const initialState = {
  appOpens: null,
  touchAgreed: false,
  baseBMR: 8700,
  BMR: 8700,
  profile: {},
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'SAVE_APP_OPENS': {
      return {
        ...state,
        appOpens: actions.payload,
      };
    }
    case 'SAVE_TOUCH_AGREED': {
      return {
        ...state,
        touchAgreed: true,
      };
    }
    case 'SAVE_PROFILE': {
      return {
        ...state,
        profile: actions.payload,
      };
    }
    case 'CLEAR_PROFILE': {
      return {
        ...state,
        profile: {},
      };
    }

    default: {
      return state;
    }
  }
};
