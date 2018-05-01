import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Name = ({ name }) => (
  <div className={styles.name}>
    {name}
  </div>
);

Name.propTypes = {
  name: PropTypes.string
};

export default Name;
