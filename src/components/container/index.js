import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { periodicCallback } from 'utils';
import { AUTO_REFRESH_DELAY } from 'constants';
import { LoadableContent } from 'components';

const CreateContainer = (ComponentClass) => {
  const periodicUpdates = periodicCallback(AUTO_REFRESH_DELAY);

  class Container extends Component {
    static propTypes = {
      id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
      isLoading: PropTypes.bool,
      match: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string
        })
      }).isRequired,
      updateData: PropTypes.func
    };

    static defaultProps = {
      isLoading: false
    };

    componentDidMount() {
      if (this.props.updateData) {
        periodicUpdates.start(this.updateDataCallback(this.props));
      }
    }

    componentWillReceiveProps(newProps) {
      if (this.props.updateData) {
        const idChanged = newProps.id !== this.props.id;
        const routerIdChanged = newProps.match.params.id !== this.props.match.params.id;
        if (idChanged || routerIdChanged) {
          periodicUpdates.restart(this.updateDataCallback(newProps));
        }
      }
    }

    componentWillUnmount() {
      if (this.props.updateData) {
        periodicUpdates.end();
      }
    }

    updateDataCallback = (props) => () => props.updateData();

    render() {
      const { isLoading, ...childProps } = this.props;

      return (
        <LoadableContent isLoading={isLoading}>
          <ComponentClass {...childProps} />
        </LoadableContent>
      );
    }
  }

  return withRouter(Container);
};

export default CreateContainer;
