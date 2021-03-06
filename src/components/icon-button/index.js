import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon } from 'components';
import styles from './styles.scss';

const CreateIconButton = (props) => {
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
      <Button {...buttonProps} className={classNames(styles.button, className)}>
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

export default CreateIconButton;
