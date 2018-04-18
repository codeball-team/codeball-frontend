import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from './styles.scss';

const Link = ({ children, onClick }) => {
  if (!children) {
    return null;
  }

  const { type } = children;

  if (!type) {
    return (
      <a className={styles.link} onClick={onClick}>
        {children}
      </a>
    );
  }

  return cloneElement(children, { onClick });
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, { to }) => ({
  onClick: () => dispatch(push(to))
});

export default connect(null, mapDispatchToProps)(Link);
