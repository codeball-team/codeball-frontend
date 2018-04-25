import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { NewPitchModel } from 'models';
import { ContainerComponent } from 'components/base';
import { NewPitchSection } from 'components/sections';
import { CancelButton, SaveButton } from 'components/ui';

class NewPitch extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    newPitch: PropTypes.object.isRequired,
    onMount: PropTypes.func.isRequired
  };

  componentWillMount = () => this.props.onMount();

  render() {
    const {
      newPitch,
      onAddressChange,
      onMinCapacityChange,
      onMaxCapacityChange,
      onNameChange,
      onTypeChange,
      onSubmit
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
