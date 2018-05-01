import React from 'react';
import PropTypes from 'prop-types';
import { PITCH_TYPE_STRING } from 'constants';
import { Icon } from 'components';
import styles from './styles.scss';

const Type = ({ type }) => (
  <div className={styles.info} title="Pitch type">
    <Icon name="layers" />
    <a href="http://www.worldsoccershop.com/buyers-guide-boots.html">
      {PITCH_TYPE_STRING[type]}
    </a>
  </div>
);

Type.propTypes = {
  type: PropTypes.string
};

export default Type;
