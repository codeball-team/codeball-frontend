import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectDate } from 'selectors/models/game';
import styles from './styles.scss';

const Date = ({ date }) => (
  <div className={styles.details} title="Game date">
    {date}
  </div>
);

Date.propTypes = {
  date: PropTypes.string
};

const mapStateToProps = (state) => ({
  date: selectDate(state)
});

export default connect(mapStateToProps)(Date);
