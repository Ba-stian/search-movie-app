import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger/src';
import rootReducer from './rootReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
		&& window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, logger);
const composedEnhancers = compose(middlewareEnhancer, devToolsEnhancer);

const store = createStore(
	rootReducer,
	composedEnhancers,
);

sagaMiddleware.run(sagas);

export default store;
