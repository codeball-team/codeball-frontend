import React from 'react';
import PropTypes from 'prop-types';
import { Link, ListItem } from 'components';
import Address from './address';
import Name from './name';
import styles from './styles.scss';

const Item = ({ children, pitch }) => (
  <Link to={`/pitches/${pitch.id}`}>
    <ListItem className={styles.pitchesListItem}>
      <Name name={pitch.name} />
      <Address address={pitch.address} />
      {children}
    </ListItem>
  </Link>
);

Item.propTypes = {
  children: PropTypes.node,
  pitch: PropTypes.object.isRequired
};

export default Item;
