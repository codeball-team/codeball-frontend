import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components/ui';
import FirstNameInput from 'new-user/components/first-name-input';
import LastNameInput from 'new-user/components/last-name-input';
import EmailInput from 'new-user/components/email-input';
import RoleInput from 'new-user/components/role-input';

const NewUserForm = ({ isValid, onSubmit }) => (
  <Form isValid={isValid} onSubmit={onSubmit}>
    <FirstNameInput />
    <LastNameInput />
    <EmailInput />
    <RoleInput />
  </Form>
);

NewUserForm.propTypes = {
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default NewUserForm;
