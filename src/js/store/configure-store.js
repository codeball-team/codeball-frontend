import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'reducers';

const initialState = undefined;
const composer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

export default (history) => {
  const store = createStore(rootReducer, initialState, createEnhancer(history));
  enableHmrForReducers(store);
  return store;
};

const createEnhancer = (history) => composer(applyMiddleware(
  routerMiddleware(history),
  require('redux-thunk').default
));

const enableHmrForReducers = (store) => {
  if(module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }
};
