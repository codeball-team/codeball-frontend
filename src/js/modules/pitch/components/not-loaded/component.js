import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded, Render } from 'components';
import AddPitchButton from 'new-pitch/components/add-button';

const PitchNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such pitch">
    <Render when={canAddNew}>
      <AddPitchButton label="Add new pitch" />
    </Render>
  </NotLoaded>
);

PitchNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default PitchNotLoaded;
