import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { ConditionalRender } from 'components/base';
import './ListItem.scss';

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <div
        className={classNames(
          'list-item',
          className
        )}>
        {children}
      </div>
    );
  }
}

export default ConditionalRender(ListItem);
