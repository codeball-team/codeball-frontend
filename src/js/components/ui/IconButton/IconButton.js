import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { Button, Icon } from 'components/ui';
import styles from './styles.scss';

export default function IconButtonDecorator(props) {
  const {
    icon: defaultIcon,
    label: defaultLabel,
    ...defaultProps
  } = props;

  class IconButton extends Component {
    static propTypes = {
      icon: PropTypes.string,
      iconClassName: PropTypes.string,
      label: PropTypes.string,
      labelClassName: PropTypes.string
    };

    static defaultProps = {
      icon: defaultIcon,
      label: defaultLabel
    };

    render() {
      const { className, icon, label, iconClassName, labelClassName, ...restProps } = this.props;
      const buttonProps = { ...defaultProps, ...restProps };

      return (
        <Button className={classNames(styles.button, className)} {...buttonProps}>
          <Icon className={styles.iconClassName} name={icon} />
          <span className={classNames(styles.label, styles.labelClassName)}>{label}</span>
        </Button>
      );
    }
  }

  return BaseComponent(IconButton);
}
