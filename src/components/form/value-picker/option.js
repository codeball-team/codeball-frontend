import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

class Option extends Component {
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
  };

  render() {
    const { className, label } = this.props;

    return (
      <div
        className={classNames(styles.valuePickerOption, className)}
        onClick={this.onClick}>
        {label}
      </div>
    );
  }
}

export default Option;
