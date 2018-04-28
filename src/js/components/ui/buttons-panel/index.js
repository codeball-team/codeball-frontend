import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const mapChild = (child) => ({
  ...child,
  props: {
    ...child.props,
    className: classNames(child.props.className, styles.button)
  }
});

const ButtonsPanel = ({ children, className }) => (
  <div className={classNames(styles.buttonsPanel, className)}>
    {Children.toArray(children).filter(Boolean).map(mapChild)}
  </div>
);

ButtonsPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ButtonsPanel;
