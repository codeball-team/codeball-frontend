import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'components';
import styles from './styles.scss';

const Spinner = ({ className, placement = 'relative', show }) => (
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

Spinner.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.oneOf([ 'fixed', 'relative' ]),
  show: PropTypes.bool.isRequired
};

export default Spinner;
