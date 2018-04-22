import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _, periodicCallback, safeGet } from 'utils';
import { AUTO_REFRESH_DELAY, ROLE_USER, ROLES_PERMISSIONS } from 'constants';
import * as actions from 'actions';
import { LoadableContent } from 'components/ui';

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
      isLoading: doesNotNeedUpdatingData ? PropTypes.bool : PropTypes.bool.isRequired
    };

    static defaultProps = {
      isLoading: false
    };

    componentWillMount = () => {
      periodicUpdates.start(this.updateDataCallback(this.props));
    };

    componentWillReceiveProps = (newProps) => {
      const idPath = [ 'params', 'id' ];
      if (safeGet(newProps, idPath) !== safeGet(this.props, idPath)) {
        periodicUpdates.restart(this.updateDataCallback(newProps));
      }
    };

    componentWillUnmount = () => {
      periodicUpdates.end();
    };

    updateDataCallback = (props) => () => updateData(props);

    render() {
      const { isLoading, ...childProps } = this.props;

      return (
        <LoadableContent
          ComponentClass={ComponentClass}
          childProps={childProps}
          isLoading={isLoading} />
      );
    }
  }

  return connect(enhanceProps(mapStateToProps), mapDispatchToProps, mergeProps)(Container);
}

function handleOptions(options = {}) {
  const {
    mapDispatchToProps,
    mapStateToProps = () => null,
    mergeProps,
    periodicDataUpdates = false,
    updateData = _.noop
  } = options;

  return {
    doesNotNeedUpdatingData: updateData === _.noop,
    mapDispatchToProps: getMapDispatchToProps(mapDispatchToProps),
    mapStateToProps,
    mergeProps,
    periodicUpdates: applyPeriodicUpdates(periodicDataUpdates),
    updateData
  };
}

function applyPeriodicUpdates(periodicDataUpdates) {
  if (periodicDataUpdates) {
    return periodicCallback(AUTO_REFRESH_DELAY);
  }

  return periodicCallback();
}

function enhanceProps(mapStateToProps) {
  return (state) => ({
    state,
    ...mapStateToProps(state),
    getPermission: (permission) => getPermission(state, permission),
    hasPermission: (permission) => hasPermission(state, permission)
  });
}

function getPermission(state, permission) {
  const role = safeGet(state, [ 'currentUserData', 'currentUser', 'role' ], ROLE_USER);
  return ROLES_PERMISSIONS[role][permission];
}

function hasPermission(state, permission) {
  return Boolean(getPermission(state, permission));
}

function getMapDispatchToProps(mapDispatchToProps = {}) {
  return (dispatch) => ({
    dispatch,
    actions: bindActionCreators(actions, dispatch),
    ...Object.keys(mapDispatchToProps).reduce((props, key) => {
      props[key] = (...params) => dispatch(mapDispatchToProps[key](...params));
      return props;
    }, {})
  });
}
