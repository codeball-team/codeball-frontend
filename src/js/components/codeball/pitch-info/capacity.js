import React from 'react';
import PropTypes from 'prop-types';
import { formatRange } from 'utils';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const PitchCapacity = ({ minCapacity, maxCapacity }) => (
  <div className={styles.info} title="Pitch capacity">
    <Icon name="people" />
    {formatRange(minCapacity, maxCapacity)}
  </div>
);

PitchCapacity.propTypes = {
  maxCapacity: PropTypes.number,
  minCapacity: PropTypes.number
};

export default PitchCapacity;
