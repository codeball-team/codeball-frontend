import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const GameDate = ({ date }) => (
  <div className={styles.value} title="Game date">
    <Icon name="calendar" />
    {date}
  </div>
);

GameDate.propTypes = {
  date: PropTypes.string
};

export default GameDate;
