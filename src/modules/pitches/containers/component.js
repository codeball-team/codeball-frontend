import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components';
import AddPitchButton from 'new-pitch/components/add-button';
import PitchesList from 'pitches/components/list';

const Pitches = ({ canAddNew }) => (
  <main>
    <PitchesList
      buttons={(
        <React.Fragment>
          <Render when={canAddNew}>
            <AddPitchButton />
          </Render>
        </React.Fragment>
      )} />
  </main>
);

Pitches.propTypes = {
  canAddNew: PropTypes.bool
};

export default Pitches;
