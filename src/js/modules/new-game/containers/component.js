import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewGameModel } from 'models';
import { NewGameSection } from 'components/sections';
import { CancelButton, SaveButton } from 'components/ui';

class NewGame extends Component {
  static propTypes = {
    newGame: PropTypes.object.isRequired,
    pitches: PropTypes.array.isRequired,
    onDateChange: PropTypes.func.isRequired,
    onDurationChange: PropTypes.func.isRequired,
    onHourChange: PropTypes.func.isRequired,
    onMinuteChange: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onPitchIdChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
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
