import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components/ui';
import AddressInput from 'new-pitch/components/address-input';
import CapacityInput from 'new-pitch/components/capacity-input';
import NameInput from 'new-pitch/components/name-input';
import TypeInput from 'new-pitch/components/type-input';

const NewPitchForm = ({ isValid, onSubmit }) => (
  <Form isValid={isValid} onSubmit={onSubmit}>
    <NameInput />
    <AddressInput />
    <TypeInput />
    <CapacityInput />
  </Form>
);

NewPitchForm.propTypes = {
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default NewPitchForm;
