import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from 'components/icons';
import styles from './styles.scss';

const Icon = ({ className, name, ...restProps }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent className={classNames(styles.icon, className)} {...restProps} />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Icon;
