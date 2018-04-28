import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Render } from 'components/ui';
import Value from './value';
import styles from './styles.scss';

const InputWrapperDecorator = (ChildComponent) => {
  const InputWrapper = ({ className, childClassName, displayValue, isValid, label, ...restProps }) => (
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
        <ChildComponent className={childClassName} {...restProps} />
      </div>
    </div>
  );

  InputWrapper.propTypes = {
    childClassName: PropTypes.string,
    className: PropTypes.string,
    displayValue: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
  };

  return InputWrapper;
};

export default InputWrapperDecorator;
