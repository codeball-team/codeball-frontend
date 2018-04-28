import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const List = ({ children, className }) => (
  <div className={classNames(styles.list, className)}>
    {children}
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default List;
