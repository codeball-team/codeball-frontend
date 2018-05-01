import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Address = ({ address }) => (
  <div className={styles.address}>
    {address}
  </div>
);

Address.propTypes = {
  address: PropTypes.string
};

export default Address;
