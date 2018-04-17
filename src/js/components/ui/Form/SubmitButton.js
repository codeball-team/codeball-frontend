import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';
import { ButtonSave } from 'components/ui';
import styles from './styles.scss';

class SubmitButton extends Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { isDisabled, onClick } = this.props;

    return (
      <div className={styles.submitButtonContainer}>
        <ButtonSave
          className={styles.submitButton}
          iconClassName={styles.icon}
          labelClassName={styles.label}
          isDisabled={isDisabled}
          onClick={onClick} />
      </div>
    );
  }
}

export default BaseComponent(SubmitButton);
