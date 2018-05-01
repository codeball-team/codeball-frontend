import React from 'react';
import PropTypes from 'prop-types';
import { USER_MISSING_PICTURE_URL } from 'constants';
import styles from './styles.scss';

const Avatar = ({ url }) => (
  <div
    className={styles.picture}
    style={{
      backgroundImage: `url("${url || USER_MISSING_PICTURE_URL}")`
    }} />
);

Avatar.propTypes = {
  url: PropTypes.string
};

export default Avatar;
