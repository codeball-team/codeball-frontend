import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import styles from './styles.scss';

const Email = ({ email }) => (
  <div className={styles.infoRow} title="Email">
    <Icon name="email" />
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

Email.propTypes = {
  email: PropTypes.string
};

export default Email;
