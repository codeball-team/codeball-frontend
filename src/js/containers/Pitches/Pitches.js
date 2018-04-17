import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { pitchesContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
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
          buttons={[
            <ButtonAddPitch key="add" renderWhen={hasPermission(PERMISSION_ADD_PITCH)} />
          ]} />
      </main>
    );
  }
}

export default ContainerComponent(Pitches, {
  mapStateToProps: pitchesContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ actions }) => {
    actions.currentUserLoad();
    actions.pitchesLoad();
  }
});
