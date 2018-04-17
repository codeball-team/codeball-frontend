import React from 'react';
import PropTypes from 'prop-types';
import { formatRange } from 'utils';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const PitchCapacity = ({ minNumberOfPlayers, maxNumberOfPlayers }) => (
  <div className={styles.info} title="Pitch capacity">
    <Icon name="people" />
    {formatRange(minNumberOfPlayers, maxNumberOfPlayers)}
  </div>
);

PitchCapacity.propTypes = {
  maxNumberOfPlayers: PropTypes.number,
  minNumberOfPlayers: PropTypes.number
};

export default PitchCapacity;
