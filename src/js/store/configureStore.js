import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState, history) {
  const store = createStore(rootReducer, initialState, createEnhancer(history));
  enableWebpackHMRForReducers(store);
  return store;
}

function createEnhancer(history) {
  if(process.env.NODE_ENV !== 'production') {
    return createDevelopmentEnhancer(createDevelopmentMiddleware(history));
  }

  return createProductionEnhancer(createProductionMiddleware(history));
}

function createProductionMiddleware(history) {
  return applyMiddleware(
    routerMiddleware(history),
    require('redux-thunk').default
  );
}

function createProductionEnhancer(middleware) {
  return compose(middleware);
}

function createDevelopmentMiddleware(history) {
  return applyMiddleware(
    routerMiddleware(history),
    require('redux-thunk').default
  );
}

function createDevelopmentEnhancer(middleware) {
  return compose(middleware);
}

function enableWebpackHMRForReducers(store) {
  if(module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }
}
