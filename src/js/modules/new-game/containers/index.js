import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-game/state';
import { actions as pitchesActions } from 'pitches/state';
import { newGameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import NewGame from './component';

export default ContainerComponent(NewGame, {
  mapStateToProps: newGameContainerSelector,
  mapDispatchToProps: {
    onDateChange: actions.newGame.changeDate,
    onDurationChange: actions.newGame.changeDuration,
    onHourChange: actions.newGame.changeHour,
    onMinuteChange: actions.newGame.changeMinute,
    onMount: actions.newGame.reset,
    onPitchIdChange: actions.newGame.changePitchId,
    onSubmit: actions.newGame.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
  }
});
