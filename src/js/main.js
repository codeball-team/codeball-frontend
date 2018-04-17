import 'node-normalize-scss/_normalize.scss';
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { BACKGROUND_IMAGES } from 'constants';
import configureStore from './store/configureStore';
import { BodyBackground } from 'components/ui';
import routes from './routes';

const store = configureStore(undefined, browserHistory);
const rootElement = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);

FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    {renderContent()}
  </Provider>,
  rootElement
);

function renderContent() {
  return (
    <div>
      <BodyBackground images={BACKGROUND_IMAGES} />
      <Router history={history} routes={routes} />
    </div>
  );
}
