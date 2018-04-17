import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import styles from './styles.scss';

const ListItem = ({ children, className, onClick }) => (
  <div
    className={classNames(styles.listItem, className)}
    onClick={onClick}>
    {children}
  </div>
);

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ListItem;
