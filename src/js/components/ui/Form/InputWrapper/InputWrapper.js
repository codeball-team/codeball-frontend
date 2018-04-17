import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import Value from './Value';
import styles from './styles.scss';

class InputWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    displayValue: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
  };

  render() {
    const {
      children,
      className,
      displayValue,
      isValid,
      label
    } = this.props;

    return (
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
  }
}

export default BaseComponent(InputWrapper);
