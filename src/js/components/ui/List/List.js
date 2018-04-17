import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import styles from './styles.scss';

class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={classNames(styles.list, className)}>
        {children}
      </div>
    );
  }
}

export default BaseComponent(List);
