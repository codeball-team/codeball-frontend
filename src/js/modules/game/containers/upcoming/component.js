import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PERMISSION_CLOSE_ENROLLMENT, PERMISSION_DRAW_TEAMS,
  PERMISSION_END_GAME, PERMISSION_ENROLL, PERMISSION_ENROLL_ANOTHER_USER
} from 'constants';
import { SaveButton, ShuffleButton, Render } from 'components/ui';
import { GameEnrollmentSection } from 'components/sections';
import EnrollAnotherUser from 'enroll-another-user/containers';
import EnrollmentForm from 'game/components/enrollment-form';
import Info from 'game/components/info';
import Lineup from 'game/components/lineup';
import NotLoaded from 'game/components/not-loaded';

class Upcoming extends Component {
  static propTypes = {
    enrolledUsersPerStatus: PropTypes.array.isRequired,
    game: PropTypes.object.isRequired,
    hasGameLoaded: PropTypes.bool.isRequired,
    hasPermission: PropTypes.func.isRequired,
    numberOfEnrolledUsers: PropTypes.number.isRequired,
    selectedEnrollmentStatus: PropTypes.string,
    unenrolledUsers: PropTypes.array.isRequired,
    onCloseEnrollment: PropTypes.func.isRequired,
    onDrawTeams: PropTypes.func.isRequired,
    onEndGame: PropTypes.func.isRequired,
    onEnrollmentStatusChange: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const {
      hasPermission,
      enrolledUsersPerStatus,
      game: {
        isEnrollmentOver,
        isGameOver
      },
      hasGameLoaded,
      numberOfEnrolledUsers,
      selectedEnrollmentStatus,
      unenrolledUsers,
      onCloseEnrollment,
      onDrawTeams,
      onEndGame,
      onEnrollmentStatusChange
    } = this.props;

    return (
      <main>
        <Render when={!hasGameLoaded}>
          <NotLoaded />
        </Render>

        <Render when={hasGameLoaded}>
          <Info
            buttons={(
              <React.Fragment>
                <Render
                  when={[
                    !isEnrollmentOver,
                    hasPermission(PERMISSION_CLOSE_ENROLLMENT)
                  ]}>
                  <SaveButton label="Close enrollment" onClick={onCloseEnrollment} />
                </Render>
                <Render
                  when={[
                    isEnrollmentOver,
                    !isGameOver,
                    hasPermission(PERMISSION_DRAW_TEAMS)
                  ]}>
                  <ShuffleButton label="Draw teams" onClick={onDrawTeams} />
                </Render>
                <Render
                  when={[
                    isEnrollmentOver,
                    !isGameOver,
                    hasPermission(PERMISSION_END_GAME)
                  ]}>
                  <SaveButton label="End game" onClick={onEndGame} />
                </Render>
              </React.Fragment>
            )} />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            !isEnrollmentOver,
            hasPermission(PERMISSION_ENROLL)
          ]}>
          <EnrollmentForm title="Are you going?" />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            !isEnrollmentOver,
            unenrolledUsers.length > 0,
            hasPermission(PERMISSION_ENROLL_ANOTHER_USER)
          ]}>
          <EnrollAnotherUser title="Enroll another player" />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            isEnrollmentOver
          ]}>
          <Lineup title="Lineups" />
        </Render>

        <Render when={hasGameLoaded}>
          <GameEnrollmentSection
            title={`Enrolled players (${numberOfEnrolledUsers})`}
            enrolledUsersPerStatus={enrolledUsersPerStatus} />
        </Render>
      </main>
    );
  }
}

export default Upcoming;
