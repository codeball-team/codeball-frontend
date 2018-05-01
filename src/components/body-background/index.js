import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { randomInteger } from 'utils';

const body = document.getElementsByTagName('body')[0];

class BodyBackground extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  componentDidMount = () => this.changeBackground(this.props.images);

  changeBackground = (images, imageId = randomInteger(images.length)) => {
    const imageUrl = images[imageId];
    body.style.backgroundImage = `url("${imageUrl}")`;
  };

  render() {
    return (
      <span />
    );
  }
}

export default BodyBackground;
