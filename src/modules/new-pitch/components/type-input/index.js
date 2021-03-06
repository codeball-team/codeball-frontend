import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import { selectType, selectTypeDisplayValue, selectTypeIsValid, selectTypeOptions } from 'new-pitch/selectors';
import { Input, ValuePicker } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectTypeDisplayValue(state),
  isValid: selectTypeIsValid(state),
  label: 'Pitch type',
  options: selectTypeOptions(state),
  value: selectType(state)
});

const mapDispatchToProps = {
  onChange: actions.changeType
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(ValuePicker));
