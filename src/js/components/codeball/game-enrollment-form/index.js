import React from 'react';
import PropTypes from 'prop-types';
import { ENROLLMENT_STATUSES } from 'constants';
import { classNames } from 'utils';
import GameEnrollmentFormOption from './option';
import OPTIONS from './options';
import styles from './styles.scss';

const GameEnrollmentForm = ({ className, enrollmentStatus, onChange }) => (
  <div className={classNames(styles.gameEnrollmentForm, className)}>
    {OPTIONS.map((option, index) => (
      <GameEnrollmentFormOption
        key={index}
        inactive={enrollmentStatus !== undefined && option.value !== enrollmentStatus}
        onClick={onChange}
        {...option} />
    ))}
  </div>
);

GameEnrollmentForm.propTypes = {
  className: PropTypes.string,
  enrollmentStatus: PropTypes.oneOf(ENROLLMENT_STATUSES),
  onChange: PropTypes.func.isRequired
};

export default GameEnrollmentForm;
