import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import styles from './styles.scss';

class ButtonsPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={classNames(styles.buttonsPanel, className)}>
        {Children.map(children, (props) => ({
          ...props,
          className: classNames(props.className, styles.button)
        }))}
      </div>
    );
  }
}

export default BaseComponent(ButtonsPanel);
