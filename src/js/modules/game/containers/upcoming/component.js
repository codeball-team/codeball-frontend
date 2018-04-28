import React from 'react';
import PropTypes from 'prop-types';
import { SaveButton, ShuffleButton, Render } from 'components';
import EnrollAnotherUser from 'enroll-another-user/containers';
import Enrollments from 'game/components/enrollments';
import EnrollmentForm from 'game/components/enrollment-form';
import Info from 'game/components/info';
import Lineup from 'game/components/lineup';
import NotLoaded from 'game/components/not-loaded';

const Upcoming = ({
  canCloseEnrollment,
  canDrawTeams,
  canEndGame,
  canEnroll,
  canEnrollAnotherUser,
  hasLoaded,
  isEnrollmentOver,
  isGameOver,
  numberOfEnrolledUsers,
  numberOfNotEnrolledUsers,
  onCloseEnrollment,
  onDrawTeams,
  onEndGame
}) => (
  <main>
    <Render when={!hasLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasLoaded}>
      <Info
        buttons={(
          <React.Fragment>
            <Render when={canCloseEnrollment && !isEnrollmentOver}>
              <SaveButton label="Close enrollment" onClick={onCloseEnrollment} />
            </Render>
            <Render when={canDrawTeams && isEnrollmentOver && !isGameOver}>
              <ShuffleButton label="Draw teams" onClick={onDrawTeams} />
            </Render>
            <Render when={canEndGame && isEnrollmentOver && !isGameOver}>
              <SaveButton label="End game" onClick={onEndGame} />
            </Render>
          </React.Fragment>
        )} />
    </Render>

    <Render when={canEnroll && hasLoaded && !isEnrollmentOver}>
      <EnrollmentForm title="Are you going?" />
    </Render>

    <Render when={canEnrollAnotherUser && hasLoaded && !isEnrollmentOver && numberOfNotEnrolledUsers > 0}>
      <EnrollAnotherUser title="Enroll another player" />
    </Render>

    <Render when={hasLoaded && isEnrollmentOver}>
      <Lineup title="Lineups" />
    </Render>

    <Render when={hasLoaded}>
      <Enrollments title={`Enrolled players (${numberOfEnrolledUsers})`} />
    </Render>
  </main>
);

Upcoming.propTypes = {
  canCloseEnrollment: PropTypes.bool,
  canDrawTeams: PropTypes.bool,
  canEndGame: PropTypes.bool,
  canEnroll: PropTypes.bool,
  canEnrollAnotherUser: PropTypes.bool,
  hasLoaded: PropTypes.bool,
  isEnrollmentOver: PropTypes.bool,
  isGameOver: PropTypes.bool,
  numberOfEnrolledUsers: PropTypes.number,
  numberOfNotEnrolledUsers: PropTypes.number,
  onCloseEnrollment: PropTypes.func.isRequired,
  onDrawTeams: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired
};

export default Upcoming;
