import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import styles from './styles.scss';

class ValuePickerOption extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    const { value, onClick } = this.props;
    onClick(value);
  }

  render() {
    const { className, label } = this.props;

    return (
      <div
        onClick={this.onClick}
        className={classNames(styles.valuePickerOption, className)}>
        {label}
      </div>
    );
  }
}

export default BaseComponent(ValuePickerOption);
