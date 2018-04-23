import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectPitchId, selectPitchName } from 'selectors/models/game';
import { Link } from 'components/ui';
import styles from './styles.scss';

const Pitch = ({ id, name }) => (
  <div className={styles.details} title="Pitch">
    <Link to={`/pitches/${id}`}>
      {name}
    </Link>
  </div>
);

Pitch.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

const mapStateToProps = (state) => ({
  id: selectPitchId(state),
  name: selectPitchName(state)
});

export default connect(mapStateToProps)(Pitch);
