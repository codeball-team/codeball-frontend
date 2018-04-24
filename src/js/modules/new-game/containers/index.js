import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-game/state';
import { actions as pitchesActions } from 'pitches/state';
import { newGameContainerSelector } from 'selectors/containers';
import { NewGameModel } from 'models';
import { ContainerComponent } from 'components/base';
import { NewGameSection } from 'components/sections';
import { ButtonCancel, ButtonSave } from 'components/ui';

class NewGame extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    newGame: PropTypes.object.isRequired,
    pitches: PropTypes.array.isRequired,
    onMount: PropTypes.func.isRequired
  };

  componentWillMount = () => this.props.onMount();

  render() {
    const {
      newGame,
      pitches,
      onDateChange,
      onDurationChange,
      onHourChange,
      onMinuteChange,
      onPitchIdChange,
      onSubmit
    } = this.props;

    return (
      <main>
        <NewGameSection
          title="New game"
          newGame={newGame}
          pitches={pitches}
          buttons={[
            <ButtonCancel
              key="cancel"
              redirect="/games" />,

            <ButtonSave
              key="save"
              isDisabled={!NewGameModel.isValid(newGame)}
              onClick={onSubmit} />
          ]}
          onDateChange={onDateChange}
          onDurationChange={onDurationChange}
          onHourChange={onHourChange}
          onMinuteChange={onMinuteChange}
          onPitchIdChange={onPitchIdChange}
          onSubmit={onSubmit} />
      </main>
    );
  }
}

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
