import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { IS_DEV } from '@app/config';
import reducer from './reducers';
import { createSagaTools } from '@app/store/SagaTools';

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({ reducer, middleware: (gDM) => [...gDM(), sagaMiddleware], devTools: IS_DEV });

  return { ...store, ...createSagaTools(sagaMiddleware) };
};

export default createStore;
