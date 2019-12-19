import {createSelector} from 'reselect';

const homeSelector = state => state.homeReducer;

export const getAppOpensSelector = createSelector(
  homeSelector,
  items => items.appOpens,
);

export const getTouchAgreedSelector = createSelector(
  homeSelector,
  items => items.touchAgreed,
);
