import React from 'react';
import PropTypes from 'prop-types';
import {
  PITCH_MAX_CAPACITY, PITCH_MIN_CAPACITY,
  PITCH_TYPE_OPTIONS, PITCH_TYPE_STRING
} from 'constants';
import { _, formatRange } from 'utils';
import { NewPitchModel } from 'models';
import { EditableText, Form, RangePicker, ValuePicker } from 'components/ui';

const NewPitch = ({
  className,
  newPitch,
  newPitch: {
    address,
    maxNumberOfPlayers,
    minNumberOfPlayers,
    name,
    type
  },
  onAddressChange,
  onMaxNumberOfPlayersChange,
  onMinNumberOfPlayersChange,
  onNameChange,
  onTypeChange,
  onSubmit
}) => {
  const capacity = formatRange(minNumberOfPlayers, maxNumberOfPlayers);

  return (
    <div className={className}>
      <Form
        onSubmit={onSubmit}
        inputs={[
          {
            label: 'Name',
            displayValue: name,
            isValid: NewPitchModel.isNameValid(newPitch),
            component: (
              <EditableText
                isEditing={true}
                text={name}
                onChange={onNameChange} />
            )
          },
          {
            label: 'Address',
            displayValue: address,
            isValid: NewPitchModel.isAddressValid(newPitch),
            component: (
              <EditableText
                isEditing={true}
                text={address}
                onChange={onAddressChange} />
            )
          },
          {
            label: 'Pitch type',
            displayValue: PITCH_TYPE_STRING[type],
            isValid: NewPitchModel.isTypeValid(newPitch),
            component: (
              <ValuePicker
                options={PITCH_TYPE_OPTIONS}
                value={type}
                onChange={onTypeChange} />
            )
          },
          {
            label: 'Capacity',
            displayValue: capacity,
            isValid: NewPitchModel.isCapacityValid(newPitch),
            component: (
              <RangePicker
                min={minNumberOfPlayers}
                minOptions={_.range(PITCH_MIN_CAPACITY, maxNumberOfPlayers + 1, 2)}
                max={maxNumberOfPlayers}
                maxOptions={_.range(minNumberOfPlayers, PITCH_MAX_CAPACITY + 1, 2)}
                separator="-"
                vertical={true}
                onMinChange={onMinNumberOfPlayersChange}
                onMaxChange={onMaxNumberOfPlayersChange} />
            )
          }
        ]} />
    </div>
  );
};

NewPitch.propTypes = {
  className: PropTypes.string,
  newPitch: PropTypes.object.isRequired,
  onAddressChange: PropTypes.func.isRequired,
  onMaxNumberOfPlayersChange: PropTypes.func.isRequired,
  onMinNumberOfPlayersChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired
};

export default NewPitch;