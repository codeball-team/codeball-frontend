import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Render } from 'components/ui';
import Value from './value';
import styles from './styles.scss';

const InputWrapper = ({ children, className, displayValue, isValid, label }) => (
  <div className={classNames(styles.inputWrapper, className)}>
    <div className={styles.label}>
      <div className={styles.title}>
        {label}
        <Render when={isValid}>
          <Value value={displayValue} />
        </Render>
      </div>

      <div
        className={classNames(
          styles.validation,
          {
            [styles.valid]: isValid,
            [styles.invalid]: !isValid
          }
        )}>
        <Render when={isValid}>
          <Icon name="save" />
        </Render>
        <Render when={!isValid}>
          <Icon name="cancel" />
        </Render>
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
