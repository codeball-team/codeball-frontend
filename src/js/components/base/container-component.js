import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { _, periodicCallback, safeGet } from 'utils';
import { AUTO_REFRESH_DELAY, ROLE_USER, ROLES_PERMISSIONS } from 'constants';
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
      id: PropTypes.number,
      isLoading: doesNotNeedUpdatingData ? PropTypes.bool : PropTypes.bool.isRequired
    };

    static defaultProps = {
      isLoading: false
    };

    componentDidMount = () => {
      periodicUpdates.start(this.updateDataCallback(this.props));
    };

    componentWillReceiveProps = (newProps) => {
      const idChanged = newProps.id !== this.props.id;
      const routerIdPath = [ 'match', 'params', 'id' ];
      const routerIdChanged = safeGet(newProps, routerIdPath) !== safeGet(this.props, routerIdPath);
      if (idChanged || routerIdChanged) {
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

const handleOptions = (options = {}) => {
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
};

const applyPeriodicUpdates = (periodicDataUpdates) => {
  if (periodicDataUpdates) {
    return periodicCallback(AUTO_REFRESH_DELAY);
  }

  return periodicCallback();
};

const enhanceProps = (mapStateToProps) => (state) => ({
  state,
  ...mapStateToProps(state),
  getPermission: (permission) => getPermission(state, permission),
  hasPermission: (permission) => hasPermission(state, permission)
});

const getPermission = (state, permission) => {
  const role = safeGet(state, [ 'currentUserData', 'currentUser', 'role' ], ROLE_USER);
  return ROLES_PERMISSIONS[role][permission];
};

const hasPermission = (state, permission) => Boolean(getPermission(state, permission));

const getMapDispatchToProps = (mapDispatchToProps = {}) => (dispatch) => ({
  dispatch,
  ...Object.keys(mapDispatchToProps).reduce((props, key) => {
    props[key] = (...params) => dispatch(mapDispatchToProps[key](...params));
    return props;
  }, {})
});
