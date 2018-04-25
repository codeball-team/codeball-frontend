import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewPitchModel } from 'models';
import { NewPitchSection } from 'components/sections';
import { CancelButton, SaveButton } from 'components/ui';

class NewPitch extends Component {
  static propTypes = {
    newPitch: PropTypes.object.isRequired,
    onAddressChange: PropTypes.func.isRequired,
    onMaxCapacityChange: PropTypes.func.isRequired,
    onMinCapacityChange: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onTypeChange: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const {
      newPitch,
      onAddressChange,
      onMaxCapacityChange,
      onMinCapacityChange,
      onNameChange,
      onSubmit,
      onTypeChange
    } = this.props;

    return (
      <main>
        <NewPitchSection
          title="New pitch"
          newPitch={newPitch}
          buttons={(
            <React.Fragment>
              <CancelButton redirect="/pitches" />
              <SaveButton
                isDisabled={!NewPitchModel.isValid(newPitch)}
                onClick={onSubmit} />
            </React.Fragment>
          )}
          onAddressChange={onAddressChange}
          onMinCapacityChange={onMinCapacityChange}
          onMaxCapacityChange={onMaxCapacityChange}
          onNameChange={onNameChange}
          onTypeChange={onTypeChange}
          onSubmit={onSubmit} />
      </main>
    );
  }
}

export default NewPitch;
