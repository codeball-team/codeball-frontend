import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-game/state';
import { actions as pitchesActions } from 'pitches/state';
import { selectDataIsLoading, selectIsValid } from 'new-game/selectors';
import { Container } from 'components';
import NewGame from './component';

const mapStateToProps = (state) => ({
  isLoading: selectDataIsLoading(state),
  isValid: selectIsValid(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(actions.reset()),
  onSubmit: () => dispatch(actions.submit()),
  updateData: () => {
    dispatch(currentUserActions.load());
    dispatch(pitchesActions.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(NewGame));
