import React from 'react';
import PropTypes from 'prop-types';
import { formatRange } from 'utils';
import { Icon } from 'components';
import styles from './styles.scss';

const Capacity = ({ maxCapacity, minCapacity }) => (
  <div className={styles.info} title="Pitch capacity">
    <Icon name="people" />
    {formatRange(minCapacity, maxCapacity)}
  </div>
);

Capacity.propTypes = {
  maxCapacity: PropTypes.number,
  minCapacity: PropTypes.number
};

export default Capacity;
