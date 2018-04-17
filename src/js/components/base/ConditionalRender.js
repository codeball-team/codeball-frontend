import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _ } from 'utils';

export default function ConditionalRender(ComponentClass) {
  class EnhancedComponent extends Component {
    static propTypes = {
      renderWhen: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool
      ])
    };

    static defaultProps = {
      renderWhen: true
    };

    render() {
      const { renderWhen, ...restProps } = this.props;
      const renderConditions = _([renderWhen]).flatten();
      const shouldRender = renderConditions.every(Boolean);

      if(!shouldRender) {
        return null;
      }

      return (
        <ComponentClass {...restProps} />
      );
    }
  }

  return EnhancedComponent;
}
