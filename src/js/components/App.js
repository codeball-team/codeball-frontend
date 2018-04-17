import React from 'react';
import PropTypes from 'prop-types';
import AjaxSpinner from 'containers/AjaxSpinner/AjaxSpinner';
import AjaxErrors from 'containers/AjaxErrors/AjaxErrors';
import { Page } from 'components/ui';

const App = ({ children }) => (
  <div>
    <Page>
      {children}
    </Page>
    <AjaxSpinner />
    <AjaxErrors />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
