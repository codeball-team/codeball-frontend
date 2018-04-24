import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitches/state';
import { pitchesContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { PitchesListSection } from 'components/sections';
import { ButtonAddPitch } from 'components/codeball';

class Pitches extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    pitches: PropTypes.array.isRequired
  };

  render() {
    const { hasPermission, pitches } = this.props;

    return (
      <main>
        <PitchesListSection
          title={`Pitches (${pitches.length})`}
          pitches={pitches}
          buttons={(
            <Render key="add" when={hasPermission(PERMISSION_ADD_PITCH)}>
              <ButtonAddPitch />
            </Render>
          )} />
      </main>
    );
  }
}

export default ContainerComponent(Pitches, {
  mapStateToProps: pitchesContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitches.load());
  }
});
