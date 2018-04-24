import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-pitch/state';
import { newPitchContainerSelector } from 'selectors/containers';
import { NewPitchModel } from 'models';
import { ContainerComponent } from 'components/base';
import { NewPitchSection } from 'components/sections';
import { ButtonCancel, ButtonSave } from 'components/ui';

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
              <ButtonCancel redirect="/pitches" />
              <ButtonSave
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

export default ContainerComponent(NewPitch, {
  mapStateToProps: newPitchContainerSelector,
  mapDispatchToProps: {
    onAddressChange: actions.newPitch.changeAddress,
    onMinCapacityChange: actions.newPitch.changeMinCapacity,
    onMaxCapacityChange: actions.newPitch.changeMaxCapacity,
    onMount: actions.newPitch.reset,
    onNameChange: actions.newPitch.changeName,
    onTypeChange: actions.newPitch.changeType,
    onSubmit: actions.newPitch.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
