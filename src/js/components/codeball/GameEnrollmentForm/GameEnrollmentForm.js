import React, { Component, PropTypes } from 'react';
import { ENROLLMENT_STATUSES } from 'constants';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import GameEnrollmentFormOption from './GameEnrollmentFormOption';
import GAME_ENROLLMENT_FORM_OPTIONS from './options';
import styles from './styles.scss';

class GameEnrollmentForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    enrollmentStatus: PropTypes.oneOf(ENROLLMENT_STATUSES),
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { className, enrollmentStatus, onChange } = this.props;

    return (
      <div className={classNames(styles.gameEnrollmentForm, className)}>
        {GAME_ENROLLMENT_FORM_OPTIONS.map((option, index) => {
          const { value: optionValue } = option;
          return (
            <GameEnrollmentFormOption
              key={index}
              inactive={enrollmentStatus !== undefined && optionValue !== enrollmentStatus}
              value={optionValue}
              onClick={onChange}
              {...option} />
          );
        })}
      </div>
    );
  }
}

export default BaseComponent(GameEnrollmentForm);
