import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { randomInteger } from 'utils';

class BodyBackground extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  componentWillMount = () => {
    const { images } = this.props;
    this.changeBackground(images);
  };

  changeBackground = (images, imageId = randomInteger(images.length)) => {
    const body = document.getElementsByTagName('body')[0];
    const { [imageId]: imageUrl } = images;
    body.style.backgroundImage = `url(${imageUrl})`;
  };

  render() {
    return (
      <span />
    );
  }
}

export default BodyBackground;
