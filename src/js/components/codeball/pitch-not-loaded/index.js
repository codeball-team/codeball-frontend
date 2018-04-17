import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded } from 'components/ui';
import { ButtonAddPitch } from 'components/codeball';

const PitchNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such pitch">
    <ButtonAddPitch renderWhen={canAddNew} label="Add new pitch" />
  </NotLoaded>
);

PitchNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default PitchNotLoaded;
