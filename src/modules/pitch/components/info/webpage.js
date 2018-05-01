import React from 'react';
import PropTypes from 'prop-types';
import { getDomain } from 'utils';
import { Icon } from 'components';
import styles from './styles.scss';

const Webpage = ({ url }) => (
  <div className={styles.info} title="Pitch webpage">
    <Icon name="world" />
    <a href={url}>
      {getDomain(url)}
    </a>
  </div>
);

Webpage.propTypes = {
  url: PropTypes.string
};

export default Webpage;
