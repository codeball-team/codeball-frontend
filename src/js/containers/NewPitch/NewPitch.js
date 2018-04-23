import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { newPitchContainerSelector } from 'selectors/containers';
import { NewPitchModel } from 'models';
import { ContainerComponent } from 'components/base';
import { NewPitchSection } from 'components/sections';
import { ButtonCancel, ButtonSave } from 'components/ui';

class NewPitch extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    hasPermission: PropTypes.func.isRequired,
    newPitch: PropTypes.object.isRequired
  };

  componentWillMount = () => {
    const { actions: { newPitchReset, redirect }, hasPermission } = this.props;
    if (hasPermission(PERMISSION_ADD_PITCH)) {
      newPitchReset();
    } else {
      redirect('/unauthorized');
    }
  };

  onAddressChange = (address) => {
    const { actions: { newPitchChangeAddress } } = this.props;
    newPitchChangeAddress(address);
  };

  onMinNumberOfPlayersChange = (minNumberOfPlayers) => {
    const { actions: { newPitchChangeMinNumberOfPlayers } } = this.props;
    newPitchChangeMinNumberOfPlayers(minNumberOfPlayers);
  };

  onMaxNumberOfPlayersChange = (maxNumberOfPlayers) => {
    const { actions: { newPitchChangeMaxNumberOfPlayers } } = this.props;
    newPitchChangeMaxNumberOfPlayers(maxNumberOfPlayers);
  };

  onNameChange = (name) => {
    const { actions: { newPitchChangeName } } = this.props;
    newPitchChangeName(name);
  };

  onTypeChange = (type) => {
    const { actions: { newPitchChangeType } } = this.props;
    newPitchChangeType(type);
  };

  onSubmit = () => {
    const { actions: { newPitchSubmit }, newPitch } = this.props;
    newPitchSubmit(newPitch);
  };

  render() {
    const { newPitch } = this.props;

    return (
      <main>
        <NewPitchSection
          title="New pitch"
          newPitch={newPitch}
          buttons={[
            <ButtonCancel
              key="cancel"
              redirect="/pitches" />,

            <ButtonSave
              key="save"
              isDisabled={!NewPitchModel.isValid(newPitch)}
              onClick={this.onSubmit} />
          ]}
          onAddressChange={this.onAddressChange}
          onMinNumberOfPlayersChange={this.onMinNumberOfPlayersChange}
          onMaxNumberOfPlayersChange={this.onMaxNumberOfPlayersChange}
          onNameChange={this.onNameChange}
          onTypeChange={this.onTypeChange}
          onSubmit={this.onSubmit} />
      </main>
    );
  }
}

export default ContainerComponent(NewPitch, {
  mapStateToProps: newPitchContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ actions }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
