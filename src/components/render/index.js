import PropTypes from 'prop-types';

const Render = ({ children, when }) => when ? children : null;

Render.propTypes = {
  children: PropTypes.node,
  when: PropTypes.any
};

export default Render;
