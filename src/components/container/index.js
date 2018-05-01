import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { noop, periodicCallback } from 'utils';
import { AUTO_REFRESH_DELAY } from 'constants';
import { LoadableContent } from 'components';

export default function ContainerComponent(ComponentClass, options) {
  const {
    doesNotNeedUpdatingData,
    mapDispatchToProps,
    mapStateToProps,
    mergeProps,
    periodicUpdates,
    updateData
  } = handleOptions(options);

  class Container extends Component {
    static propTypes = {
      id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
      isLoading: doesNotNeedUpdatingData ? PropTypes.bool : PropTypes.bool.isRequired,
      match: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string
        })
      }).isRequired
    };

    static defaultProps = {
      isLoading: false
    };

    componentDidMount = () => periodicUpdates.start(this.updateDataCallback(this.props));

    componentWillReceiveProps = (newProps) => {
      const idChanged = newProps.id !== this.props.id;
      const routerIdChanged = newProps.match.params.id !== this.props.match.params.id;
      if (idChanged || routerIdChanged) {
        periodicUpdates.restart(this.updateDataCallback(newProps));
      }
    };

    componentWillUnmount = () => periodicUpdates.end();

    updateDataCallback = (props) => () => updateData(props);

    render() {
      const { isLoading, ...childProps } = this.props;

      return (
        <LoadableContent isLoading={isLoading}>
          <ComponentClass {...childProps} />
        </LoadableContent>
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(withRouter(Container));
}

const handleOptions = (options = {}) => {
  const {
    mapDispatchToProps,
    mapStateToProps = () => null,
    mergeProps,
    periodicDataUpdates = false,
    updateData = noop
  } = options;

  return {
    doesNotNeedUpdatingData: updateData === noop,
    mapDispatchToProps: getMapDispatchToProps(mapDispatchToProps),
    mapStateToProps,
    mergeProps,
    periodicUpdates: applyPeriodicUpdates(periodicDataUpdates),
    updateData
  };
};

const applyPeriodicUpdates = (periodicDataUpdates) => {
  if (periodicDataUpdates) {
    return periodicCallback(AUTO_REFRESH_DELAY);
  }

  return periodicCallback();
};

const getMapDispatchToProps = (mapDispatchToProps = {}) => (dispatch) => ({
  dispatch,
  ...Object.keys(mapDispatchToProps).reduce((props, key) => {
    props[key] = (...params) => dispatch(mapDispatchToProps[key](...params));
    return props;
  }, {})
});
