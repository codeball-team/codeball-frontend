import { connect } from 'react-redux';
import { actions } from 'new-game/state';
import {
  selectHour,
  selectHourOptions,
  selectMinute,
  selectMinuteOptions,
  selectTimeDisplayValue,
  selectTimeIsValid
} from 'new-game/selectors';
import { padLeft } from 'utils';
import { Input, RangePicker } from 'components';

const valueFormatter = (value) => padLeft(value, 2);

const mapStateToProps = (state) => ({
  displayValue: selectTimeDisplayValue(state),
  isValid: selectTimeIsValid(state),
  label: 'Start time',
  max: selectMinute(state),
  maxOptions: selectMinuteOptions(state),
  min: selectHour(state),
  minOptions: selectHourOptions(state),
  separator: ':',
  valueFormatter,
  vertical: true
});

const mapDispatchToProps = {
  onMaxChange: actions.newGame.changeMinute,
  onMinChange: actions.newGame.changeHour
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(RangePicker));
