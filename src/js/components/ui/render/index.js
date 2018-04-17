import React from 'react';
import PropTypes from 'prop-types';
import { _ } from 'utils';

const Render = ({ children, when = true }) => {
  const renderConditions = _([ when ]).flatten();
  const shouldRender = renderConditions.every(Boolean);
  return shouldRender ? children : null;
};

Render.propTypes = {
  children: PropTypes.node,
  when: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
};

export default Render;
