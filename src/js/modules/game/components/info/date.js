import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const Date = ({ date }) => (
  <div className={styles.value} title="Game date">
    <Icon name="calendar" />
    {date}
  </div>
);

Date.propTypes = {
  date: PropTypes.string
};

export default Date;
