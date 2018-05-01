import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Pitch = ({ pitch }) => (
  <div className={styles.pitch}>
    {pitch.name}
  </div>
);

Pitch.propTypes = {
  pitch: PropTypes.object.isRequired
};

export default Pitch;
