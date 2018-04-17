import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import styles from './styles.scss';

class NotLoaded extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    message: PropTypes.string.isRequired
  };

  render() {
    const { children, className, message } = this.props;

    return (
      <div className={classNames(styles.notLoaded, className)}>
        <div className={styles.message}>
          {message}
        </div>

        {children}
      </div>
    );
  }
}

export default BaseComponent(NotLoaded);
