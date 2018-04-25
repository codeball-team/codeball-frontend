import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const Time = ({ time }) => (
  <div className={styles.value} title="Game time">
    <Icon name="clock" />
    {time}
  </div>
);

Time.propTypes = {
  time: PropTypes.string
};

export default Time;
