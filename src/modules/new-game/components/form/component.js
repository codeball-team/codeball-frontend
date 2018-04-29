import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components';
import DateInput from 'new-game/components/date-input';
import DurationInput from 'new-game/components/duration-input';
import PitchIdInput from 'new-game/components/pitch-id-input';
import TimeInput from 'new-game/components/time-input';

const NewGameForm = ({ isValid, onSubmit }) => (
  <Form isValid={isValid} onSubmit={onSubmit}>
    <PitchIdInput />
    <DurationInput />
    <TimeInput />
    <DateInput />
  </Form>
);

NewGameForm.propTypes = {
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default NewGameForm;
