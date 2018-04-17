import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import styles from './styles.scss';

const ButtonsPanel = ({ children, className }) => (
  <div className={classNames(styles.buttonsPanel, className)}>
    {Children.map(children, props => ({
      ...props,
      className: classNames(props.className, styles.button)
    }))}
  </div>
);

ButtonsPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ButtonsPanel;
