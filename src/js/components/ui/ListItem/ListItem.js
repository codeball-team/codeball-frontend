import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import styles from './styles.scss';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const { children, className, onClick } = this.props;

    return (
      <div
        className={classNames(styles.listItem, className)}
        onClick={onClick}>
        {children}
      </div>
    );
  }
}

export default BaseComponent(ListItem);
