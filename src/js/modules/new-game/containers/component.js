import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME } from 'constants';
import { NewGameModel } from 'models';
import { NewGameSection } from 'components/sections';
import { CancelButton, SaveButton } from 'components/ui';

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
          buttons={(
            <React.Fragment>
              <CancelButton redirect="/games" />
              <SaveButton
                isDisabled={!NewGameModel.isValid(newGame)}
                onClick={onSubmit} />
            </React.Fragment>
          )}
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

export default NewGame;
