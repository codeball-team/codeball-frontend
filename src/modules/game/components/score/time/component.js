import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ className, time }) => (
  <div className={className} title="Game time">
    {time}
  </div>
);

Time.propTypes = {
  className: PropTypes.string,
  time: PropTypes.string
};

export default Time;
