import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { Icon } from 'components/ui';
import Value from './value';
import styles from './styles.scss';

const InputWrapper = ({ children, className, displayValue, isValid, label }) => (
  <div
    className={classNames(
      styles.inputWrapper,
      className
    )}>
    <div className={styles.label}>
      <div className={styles.title}>
        {label}<Value renderWhen={isValid} value={displayValue} />
      </div>

      <div
        className={classNames(
          styles.validation,
          {
            [styles.valid]: isValid,
            [styles.invalid]: !isValid
          }
        )}>
        <Icon name="save" renderWhen={isValid} />
        <Icon name="cancel" renderWhen={!isValid} />
      </div>
    </div>

    <div>
      {children}
    </div>
  </div>
);

InputWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  displayValue: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};

export default InputWrapper;
