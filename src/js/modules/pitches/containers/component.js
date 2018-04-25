import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_PITCH } from 'constants';
import { Render } from 'components/ui';
import { PitchesListSection } from 'components/sections';
import { AddPitchButton } from 'components/codeball';

const Pitches = ({ hasPermission, pitches }) => (
  <main>
    <PitchesListSection
      title={`Pitches (${pitches.length})`}
      pitches={pitches}
      buttons={(
        <Render when={hasPermission(PERMISSION_ADD_PITCH)}>
          <AddPitchButton />
        </Render>
      )} />
  </main>
);

Pitches.propTypes = {
  hasPermission: PropTypes.func.isRequired,
  pitches: PropTypes.array.isRequired
};

export default Pitches;
