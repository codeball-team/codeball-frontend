import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSave } from 'components/ui';
import styles from './styles.scss';

const SubmitButton = ({ isDisabled, onClick }) => (
  <div className={styles.submitButtonContainer}>
    <ButtonSave
      className={styles.submitButton}
      iconClassName={styles.icon}
      labelClassName={styles.label}
      isDisabled={isDisabled}
      onClick={onClick} />
  </div>
);

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default SubmitButton;
