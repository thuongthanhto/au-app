import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const storeApp = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = storeApp();
export const persistor = persistStore(store);
