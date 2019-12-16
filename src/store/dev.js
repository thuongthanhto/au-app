import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const storeApp = () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = storeApp();