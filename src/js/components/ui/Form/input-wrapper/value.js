import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Value = ({ value }) => (
  <span>
    <span>:</span>
    <span className={styles.textHighlight}>{` ${value}`}</span>
  </span>
);

Value.propTypes = {
  value: PropTypes.string
};

export default Value;
