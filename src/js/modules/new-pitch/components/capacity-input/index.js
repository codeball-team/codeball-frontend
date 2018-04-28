import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import {
  selectCapacityDisplayValue,
  selectCapacityIsValid,
  selectMaxCapacity,
  selectMaxCapacityOptions,
  selectMinCapacity,
  selectMinCapacityOptions
} from 'new-pitch/selectors';
import { InputWrapper, RangePicker } from 'components/ui';

const mapStateToProps = (state) => ({
  displayValue: selectCapacityDisplayValue(state),
  isValid: selectCapacityIsValid(state),
  label: 'Capacity',
  min: selectMinCapacity(state),
  minOptions: selectMinCapacityOptions(state),
  max: selectMaxCapacity(state),
  maxOptions: selectMaxCapacityOptions(state),
  separator: '-',
  vertical: true
});

const mapDispatchToProps = {
  onMaxChange: actions.newPitch.changeMaxCapacity,
  onMinChange: actions.newPitch.changeMinCapacity
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(RangePicker));
