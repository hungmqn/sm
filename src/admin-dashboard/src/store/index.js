import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;