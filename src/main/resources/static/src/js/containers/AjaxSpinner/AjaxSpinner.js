import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner } from 'components';
import './AjaxSpinner.scss';

class AjaxSpinner extends Component {
  static propTypes = {
    ajaxRequests: PropTypes.number.isRequired
  };

  render () {
    const { ajaxRequests } = this.props;

    return (
      <Spinner show={ajaxRequests > 0} />
    );
  }
}

function mapStateToProps(state) {
  return {
    ajaxRequests: state.ajaxRequests
  };
}

export default connect(
  mapStateToProps
)(AjaxSpinner);
