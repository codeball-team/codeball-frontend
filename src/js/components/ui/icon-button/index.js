import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { Button, Icon } from 'components/ui';
import styles from './styles.scss';

const IconButtonDecorator = props => {
  const {
    icon: defaultIcon,
    label: defaultLabel,
    ...defaultProps
  } = props;

  const IconButton = ({
    className,
    icon = defaultIcon,
    label = defaultLabel,
    iconClassName,
    labelClassName,
    ...restProps
  }) => {
    const buttonProps = { ...defaultProps, ...restProps };

    return (
      <Button className={classNames(styles.button, className)} {...buttonProps}>
        <Icon className={classNames(styles.icon, iconClassName)} name={icon} />
        <span className={classNames(styles.label, labelClassName)}>{label}</span>
      </Button>
    );
  };

  IconButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    iconClassName: PropTypes.string,
    label: PropTypes.string,
    labelClassName: PropTypes.string
  };

  return IconButton;
};

export default IconButtonDecorator;
