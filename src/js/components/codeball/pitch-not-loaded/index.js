import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded, Render } from 'components/ui';
import { ButtonAddPitch } from 'components/codeball';

const PitchNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such pitch">
    <Render when={canAddNew}>
      <ButtonAddPitch label="Add new pitch" />
    </Render>
  </NotLoaded>
);

PitchNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default PitchNotLoaded;
