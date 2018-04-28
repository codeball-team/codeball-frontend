import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-game/state';
import { actions as pitchesActions } from 'pitches/state';
import { selectDataIsLoading, selectIsValid } from 'new-game/selectors';
import { ContainerComponent } from 'components';
import NewGame from './component';

export default ContainerComponent(NewGame, {
  mapStateToProps: (state) => ({
    isLoading: selectDataIsLoading(state),
    isValid: selectIsValid(state)
  }),
  mapDispatchToProps: {
    onMount: actions.newGame.reset,
    onSubmit: actions.newGame.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
  }
});
