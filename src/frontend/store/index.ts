import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { totalReducer } from './totalReducer';
// import * as sagas from './sagas/FooSagas';
import { readBarDataSaga } from './sagas/barSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  totalReducer,
  applyMiddleware(createLogger(), sagaMiddleware),
);

/*
 *for(let saga in sagas) {
 * sagaMiddleware.run(sagas[saga]);
 *} 
 */
sagaMiddleware.run(readBarDataSaga);
