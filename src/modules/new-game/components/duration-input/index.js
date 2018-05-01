import { connect } from 'react-redux';
import { actions } from 'new-game/state';
import {
  selectDuration,
  selectDurationDisplayValue,
  selectDurationIsValid,
  selectDurationOptions
} from 'new-game/selectors';
import { Input, ValuePicker } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectDurationDisplayValue(state),
  isValid: selectDurationIsValid(state),
  label: 'Duration',
  options: selectDurationOptions(state),
  value: selectDuration(state)
});

const mapDispatchToProps = {
  onChange: actions.newGame.changeDuration
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(ValuePicker));
