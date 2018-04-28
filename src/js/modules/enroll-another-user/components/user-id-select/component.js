import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'components/ui';

class UserIdSelect extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };

  onChange = ({ value }) => this.props.onChange(value);

  render() {
    const { options, value } = this.props;

    return (
      <Select
        noResultsText="There are no players"
        placeholder="Select player..."
        options={options}
        value={value}
        searchable={false}
        clearable={false}
        onChange={this.onChange} />
    );
  }
}

export default UserIdSelect;
