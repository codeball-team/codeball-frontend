import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import Error from './Error';
import styles from './styles.scss';

class Errors extends Component {
  static propTypes = {
    className: PropTypes.string,
    errors: PropTypes.array.isRequired,
    onErrorAcknowledge: PropTypes.func.isRequired
  };

  render() {
    const { className, errors, onErrorAcknowledge } = this.props;

    return (
      <div className={classNames(styles.errors, className)}>
        {errors.map((error, index) => (
          <Error
            key={index}
            error={error}
            errorIndex={index}
            onErrorAcknowledge={onErrorAcknowledge} />
        ))}
      </div>
    );
  }
}

export default BaseComponent(Errors);
