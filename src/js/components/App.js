import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AjaxSpinner from 'containers/AjaxSpinner/AjaxSpinner';
import AjaxErrors from 'containers/AjaxErrors/AjaxErrors';
import { Page } from 'components/ui';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Page>
          {children}
        </Page>
        <AjaxSpinner />
        <AjaxErrors />
      </div>
    );
  }
}
