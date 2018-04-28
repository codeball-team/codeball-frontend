import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ROLE_STRING } from 'constants';
import { NewUserModel } from 'models';
import { EditableText, Form, ValuePicker } from 'components/ui';
import styles from './styles.scss';

const NewUser = ({
  className,
  newUser,
  newUser: {
    email,
    firstName,
    lastName,
    role
  },
  roleOptions,
  onEmailChange,
  onFirstNameChange,
  onLastNameChange,
  onRoleChange,
  onSubmit
}) => (
  <div className={classNames(styles.newUser, className)}>
    <Form
      onSubmit={onSubmit}
      inputs={[
        {
          label: 'First name',
          displayValue: firstName,
          isValid: NewUserModel.isFirstNameValid(newUser),
          component: (
            <EditableText
              isEditing={true}
              text={firstName}
              onChange={onFirstNameChange} />
          )
        },
        {
          label: 'Last name',
          displayValue: lastName,
          isValid: NewUserModel.isLastNameValid(newUser),
          component: (
            <EditableText
              isEditing={true}
              text={lastName}
              onChange={onLastNameChange} />
          )
        },
        {
          label: 'Email',
          displayValue: email,
          isValid: NewUserModel.isEmailValid(newUser),
          component: (
            <EditableText
              isEditing={true}
              text={email}
              onChange={onEmailChange} />
          )
        },
        {
          label: 'Role',
          displayValue: ROLE_STRING[role],
          isValid: NewUserModel.isRoleValid(newUser),
          component: (
            <ValuePicker
              className={styles.rolePicker}
              options={roleOptions}
              value={role}
              onChange={onRoleChange} />
          )
        }
      ]} />
  </div>
);

NewUser.propTypes = {
  className: PropTypes.string,
  newUser: PropTypes.object.isRequired,
  roleOptions: PropTypes.array.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onRoleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default NewUser;
