import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const GameDuration = ({ duration }) => (
  <div className={styles.value} title="Game duration">
    <Icon name="hourglass" />
    {duration} min
  </div>
);

GameDuration.propTypes = {
  duration: PropTypes.number
};

export default GameDuration;
