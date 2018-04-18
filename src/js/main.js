import 'node-normalize-scss/_normalize.scss';
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { BACKGROUND_IMAGES } from 'constants';
import configureStore from './store/configure-store';
import { BodyBackground } from 'components/ui';
import App from 'components/app';

const history = createHistory();
const store = configureStore(history);
const rootElement = document.getElementById('app');

FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderContent()}
    </ConnectedRouter>
  </Provider>,
  rootElement
);

function renderContent() {
  return (
    <div>
      <BodyBackground images={BACKGROUND_IMAGES} />
      <App />
    </div>
  );
}
