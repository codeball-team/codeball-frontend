import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';

class Value extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    const { value } = this.props;

    return (
      <span>
        <span>:</span>
        <span className={styles.textHighlight}>{` ${value}`}</span>
      </span>
    );
  }
}

export default BaseComponent(Value);
