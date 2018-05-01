import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import styles from './styles.scss';

const getMapsUrl = (address) => `https://www.google.com/maps/?q=${encodeURIComponent(address)}`;

const Address = ({ address }) => (
  <div className={styles.info} title="Pitch address">
    <Icon name="location" />
    <a href={getMapsUrl(address)}>
      {address}
    </a>
  </div>
);

Address.propTypes = {
  address: PropTypes.string
};

export default Address;
