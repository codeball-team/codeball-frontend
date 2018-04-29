import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Picture = ({ pictureUrl }) => (
  <div
    className={styles.picture}
    style={{
      backgroundImage: `url("${pictureUrl}")`
    }} />
);

Picture.propTypes = {
  pictureUrl: PropTypes.string
};

export default Picture;
