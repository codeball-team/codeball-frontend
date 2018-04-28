import { connect } from 'react-redux';
import { actions } from 'new-game/state';
import { selectPitchId, selectPitchIdDisplayValue, selectPitchIdIsValid } from 'new-game/selectors';
import { selectPitchesOptions } from 'pitches/selectors';
import { InputWrapper, Select } from 'components';

const mapStateToProps = (state) => ({
  clearable: false,
  displayValue: selectPitchIdDisplayValue(state),
  isValid: selectPitchIdIsValid(state),
  label: 'Pitch',
  noResultsText: 'There are no pitches',
  options: selectPitchesOptions(state),
  placeholder: 'Select pitch...',
  searchable: false,
  value: selectPitchId(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ value }) => dispatch(actions.newGame.changePitchId(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(Select));
