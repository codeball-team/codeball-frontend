import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ className, date }) => (
  <div className={className} title="Game date">
    {date}
  </div>
);

Date.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string
};

export default Date;
