import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components/ui';

const Pitch = ({ className, id, name }) => (
  <div className={className} title="Pitch">
    <Link to={`/pitches/${id}`}>
      {name}
    </Link>
  </div>
);

Pitch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
};

export default Pitch;
