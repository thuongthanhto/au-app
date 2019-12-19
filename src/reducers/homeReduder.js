const initialState = {
  appOpens: null,
  touchAgreed: false,
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

    default: {
      return state;
    }
  }
};
