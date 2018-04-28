import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import { selectType, selectTypeDisplayValue, selectTypeIsValid, selectTypeOptions } from 'new-pitch/selectors';
import { InputWrapper, ValuePicker } from 'components/ui';

const mapStateToProps = (state) => ({
  displayValue: selectTypeDisplayValue(state),
  isValid: selectTypeIsValid(state),
  label: 'Pitch type',
  options: selectTypeOptions(state),
  value: selectType(state)
});

const mapDispatchToProps = {
  onChange: actions.newPitch.changeType
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(ValuePicker));
