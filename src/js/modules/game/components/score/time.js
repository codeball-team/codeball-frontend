import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTime } from 'selectors/models/game';
import styles from './styles.scss';

const Time = ({ time }) => (
  <div className={styles.details} title="Game time">
    {time}
  </div>
);

Time.propTypes = {
  time: PropTypes.string
};

const mapStateToProps = (state) => ({
  time: selectTime(state)
});

export default connect(mapStateToProps)(Time);
