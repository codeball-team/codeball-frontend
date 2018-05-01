import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const DateTime = ({ date, time }) => (
  <div className={styles.dateTime}>
    {date} {time}
  </div>
);

DateTime.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string
};

export default DateTime;
