import React from 'react';
import PropTypes from 'prop-types';
import { Form, Render } from 'components/ui';
import UserIdSelect from 'enroll-another-user/components/user-id-select';

const EnrollAnotherUser = ({ className, displayValue, isEditing, isValid }) => (
  <div className={className}>
    <Render when={isEditing}>
      <Form
        inputs={[
          {
            label: 'Player',
            displayValue,
            isValid,
            component: (
              <UserIdSelect />
            )
          }
        ]} />
    </Render>
  </div>
);

EnrollAnotherUser.propTypes = {
  className: PropTypes.string,
  displayValue: PropTypes.string,
  isEditing: PropTypes.bool,
  isValid: PropTypes.bool
};

export default EnrollAnotherUser;
