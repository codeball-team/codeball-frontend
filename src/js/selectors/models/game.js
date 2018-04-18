import { createSelector } from 'reselect';
import { findById } from 'utils';
import { ENROLLMENT_STATUSES, ENROLLMENT_STATUS_YES } from 'constants';
import { currentUserIdSelector } from 'selectors/models/current-user';
import { pitchesSelector } from 'selectors/models/pitches';
import { usersSelector } from 'selectors/models/users';

const mapUsersIdsToUsers = (users, usersIds) => usersIds
  .map((userId) => findById(users, userId, null))
  .filter(Boolean);

export const gameSelector = (state) => state.gameData.game;

export const enrollmentsSelector = (state) => gameSelector(state).enrollments;

export const gameIdSelector = (state) => gameSelector(state).id;

export const hasGameLoadedSelector = (state) => state.gameData.hasLoaded;

export const isGameEditingSelector = (state) => state.gameData.isEditing;

export const enrolledUsersSelector = createSelector(
  [ enrollmentsSelector, usersSelector ],
  (enrollments, users) => enrollments.map(({ userId }) => findById(users, userId))
);

export const editableGameSelector = createSelector(
  [ (state) => state.gameData, isGameEditingSelector ],
  (gameData, isGameEditing) => (isGameEditing ? gameData.editedGame : gameData.game)
);

export const enrolledUsersPerStatusSelector = createSelector(
  [ enrolledUsersSelector, enrollmentsSelector ],
  (enrolledUsers, enrollments) => ENROLLMENT_STATUSES.reduce(
    (enrolledUsersPerStatus, enrollmentStatus) => ([
      ...enrolledUsersPerStatus,
      {
        enrollmentStatus,
        enrolledUsers: enrollments.filter(
          (enrollment) => enrollment.enrollmentStatus === enrollmentStatus
        ).map(
          ({ userId }) => findById(enrolledUsers, userId)
        )
      }
    ]),
    []
  )
);

export const numberOfEnrolledUsersSelector = createSelector(
  [ enrollmentsSelector ],
  (enrollments) => enrollments.filter(
    ({ enrollmentStatus }) => enrollmentStatus === ENROLLMENT_STATUS_YES
  ).length
);

export const pitchSelector = createSelector(
  [ pitchesSelector, (state) => gameSelector(state).pitchId ],
  findById
);

export const selectedEnrollmentStatusSelector = createSelector(
  [ currentUserIdSelector, enrollmentsSelector ],
  (currentUserId, enrollments) => (enrollments.find(
    ({ userId }) => userId === currentUserId
  ) || {}).enrollmentStatus
);

export const teamASelector = createSelector(
  [ usersSelector, (state) => gameSelector(state).teamA ],
  mapUsersIdsToUsers
);

export const teamBSelector = createSelector(
  [ usersSelector, (state) => gameSelector(state).teamB ],
  mapUsersIdsToUsers
);

export const unenrolledUsersSelector = createSelector(
  [ currentUserIdSelector, enrollmentsSelector, usersSelector ],
  (currentUserId, enrollments, users) => users.filter(
    ({ id }) => id !== currentUserId && enrollments.findIndex(
      ({ userId }) => id === userId
    ) < 0
  )
);
