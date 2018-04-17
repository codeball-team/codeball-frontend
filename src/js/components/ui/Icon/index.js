import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import icons from 'components/ui/icons';
import styles from './styles.scss';

const Icon = ({ className, name, ...restProps }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      {...restProps}
      className={classNames(styles.icon, className)} />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Icon;
