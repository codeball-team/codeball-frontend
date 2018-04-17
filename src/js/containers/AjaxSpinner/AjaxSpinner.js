import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ajaxSpinnerContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Spinner } from 'components/ui';

class AjaxSpinner extends Component {
  static propTypes = {
    areTherePendingRequests: PropTypes.bool.isRequired
  };

  render() {
    const { areTherePendingRequests } = this.props;

    return (
      <Spinner
        placement="fixed"
        show={areTherePendingRequests} />
    );
  }
}

export default ContainerComponent(AjaxSpinner, {
  mapStateToProps: ajaxSpinnerContainerSelector
});
