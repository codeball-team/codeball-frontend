import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import sagas from './sagas';

const composer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const createSagaMiddleware = typeof reduxSaga.default === 'function' ? reduxSaga.default : reduxSaga;
const sagaMiddleware = createSagaMiddleware();
const initialState = undefined;

export default (history) => {
  const store = createStore(rootReducer, initialState, createEnhancer(history));
  sagaMiddleware.run(sagas);
  enableHmrForReducers(store);
  return store;
};

const createEnhancer = (history) => composer(applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history),
  require('redux-thunk').default
));

const enableHmrForReducers = (store) => {
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }
};
