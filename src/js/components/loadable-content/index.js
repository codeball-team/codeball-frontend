import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

class LoadableContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    childProps: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      hasBeenFullyLoaded: false
    };
  }

  componentWillReceiveProps = (newProps) => {
    const { hasBeenFullyLoaded } = this.state;
    if (!hasBeenFullyLoaded) {
      const { isLoading: wasLoading } = this.props;
      const { isLoading } = newProps;
      const hasFinishedLoading = wasLoading && !isLoading;
      this.setState({ hasBeenFullyLoaded: hasFinishedLoading });
    }
  };

  render() {
    const { children, isLoading } = this.props;
    const { hasBeenFullyLoaded } = this.state;
    const displayLoadingState = !hasBeenFullyLoaded && isLoading;

    return (
      <div
        className={classNames(
          styles.loadableContent,
          {
            [styles.loading]: displayLoadingState
          }
        )}>
        {!displayLoadingState && children}
      </div>
    );
  }
}

export default LoadableContent;
