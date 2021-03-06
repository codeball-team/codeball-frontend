import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import styles from './styles.scss';

const Duration = ({ duration }) => (
  <div className={styles.value} title="Game duration">
    <Icon name="hourglass" />
    {duration} min
  </div>
);

Duration.propTypes = {
  duration: PropTypes.number
};

export default Duration;
