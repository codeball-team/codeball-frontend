import moment from 'moment';
import { connect } from 'react-redux';
import { MONTH_YEAR_FORMAT } from 'constants';
import { noop } from 'utils';
import { actions } from 'new-game/state';
import { selectDateDisplayValue, selectDateIsValid, selectSelectedDate } from 'new-game/selectors';
import { Calendar, Input } from 'components';

const mapStateToProps = (state) => ({
  dateFormat: MONTH_YEAR_FORMAT,
  displayValue: selectDateDisplayValue(state),
  isValid: selectDateIsValid(state),
  label: 'Start date',
  locale: 'en-GB',
  minDate: moment(),
  selected: selectSelectedDate(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickOutside: noop,
  onSelect: (date) => dispatch(actions.changeDate(date.valueOf()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Input(Calendar));
