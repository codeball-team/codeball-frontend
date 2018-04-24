import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitch/state';
import { pitchContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { PitchInfoSection } from 'components/sections';
import { PitchNotLoaded } from 'components/codeball';

class Pitch extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    hasPitchLoaded: PropTypes.bool.isRequired,
    pitch: PropTypes.object.isRequired
  };

  render() {
    const {
      hasPermission,
      hasPitchLoaded,
      pitch,
      pitch: {
        name
      }
    } = this.props;

    return (
      <main>
        <Render when={!hasPitchLoaded}>
          <PitchNotLoaded canAddNew={hasPermission(PERMISSION_ADD_PITCH)} />
        </Render>

        <Render when={hasPitchLoaded}>
          <PitchInfoSection
            title={name}
            pitch={pitch} />
        </Render>
      </main>
    );
  }
}

export default ContainerComponent(Pitch, {
  mapStateToProps: pitchContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitch.load(match.params.id));
  }
});
