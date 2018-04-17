import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import icons from 'components/ui/icons';
import styles from './styles.scss';

class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
  };

  render() {
    const { className, name, ...restProps } = this.props;
    const IconComponent = icons[name];

    return (
      <IconComponent
        {...restProps}
        className={classNames(styles.icon, className)} />
    );
  }
}

export default BaseComponent(Icon);
