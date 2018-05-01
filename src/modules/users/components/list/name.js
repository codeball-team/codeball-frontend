import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Name = ({ firstName, lastName }) => (
  <div className={styles.name}>
    {lastName} {firstName}
  </div>
);

Name.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default Name;
