import 'node-normalize-scss/_normalize.scss';
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from 'components/app';

export default (Wrapper) => {
  FastClick.attach(document.body);

  const history = createHistory();
  const store = configureStore(history);
  const rootElement = document.getElementById('app');

  const render = (Component) => {
    const rendered = (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    );
    const wrapped = Wrapper ? <Wrapper>{rendered}</Wrapper> : rendered;
    ReactDOM.render(wrapped, rootElement);
  };

  if (module.hot) {
    module.hot.accept('components/app', () => {
      const NextApp = require('components/app').default;
      render(NextApp);
    });
  }

  render(App);
};
