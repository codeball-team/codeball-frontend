import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Error from './error';
import styles from './styles.scss';

const Errors = ({ className, errors, onErrorAcknowledge }) => (
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

Errors.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.array.isRequired,
  onErrorAcknowledge: PropTypes.func.isRequired
};

export default Errors;
