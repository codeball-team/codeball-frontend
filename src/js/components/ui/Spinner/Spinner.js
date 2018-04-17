import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.oneOf(['fixed', 'relative']),
    show: PropTypes.bool.isRequired
  };

  static defaultProps = {
    placement: 'relative'
  };

  render() {
    const { className, placement, show } = this.props;

    return (
      <div
        className={classNames(
          styles.spinner,
          {
            [styles.fixed]: placement === 'fixed',
            [styles.relative]: placement === 'relative',
            [styles.visible]: show
          },
          className
        )}>
        <Icon name="load" className={styles.spinnerImage} />
      </div>
    );
  }
}

export default BaseComponent(Spinner);
