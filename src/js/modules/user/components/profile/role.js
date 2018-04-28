import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import styles from './styles.scss';

const Role = ({ role }) => (
  <div className={styles.infoRow} title="Role">
    <Icon name="access" />
    {role}
  </div>
);

Role.propTypes = {
  role: PropTypes.string
};

export default Role;
