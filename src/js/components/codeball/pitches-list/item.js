import React from 'react';
import PropTypes from 'prop-types';
import { Link, ListItem } from 'components/ui';
import styles from './styles.scss';

const PitchesListItem = ({ children, pitch: { address, id, name } }) => (
  <Link to={`/pitches/${id}`}>
    <ListItem className={styles.pitchesListItem}>
      <div className={styles.name}>
        {name}
      </div>

      <div className={styles.address}>
        {address}
      </div>

      {children}
    </ListItem>
  </Link>
);

PitchesListItem.propTypes = {
  children: PropTypes.node,
  pitch: PropTypes.object.isRequired
};

export default PitchesListItem;
