import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const NotLoaded = ({ children, className, message }) => (
  <div className={classNames(styles.notLoaded, className)}>
    <div className={styles.message}>
      {message}
    </div>

    {children}
  </div>
);

NotLoaded.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default NotLoaded;
