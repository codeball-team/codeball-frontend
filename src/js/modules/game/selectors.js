import { createSelector } from 'reselect';
import { ENROLLMENT_STATUSES, ENROLLMENT_STATUS_YES } from 'constants';
import { findById } from 'utils';
import { selectIsLoading as selectCurrentUserIsLoading, selectCurrentUserId } from 'current-user/selectors';
import { selectIsLoading as selectPitchesIsLoading, selectPitches } from 'pitches/selectors';
import { selectIsLoading as selectUsersIsLoading, selectUsers } from 'users/selectors';

const mapUsersIdsToUsers = (users, usersIds) => usersIds
  .map((userId) => findById(users, userId, null))
  .filter(Boolean);

export const selectRoot = (state) => state.gameData;
export const selectGame = createSelector(selectRoot, ({ game }) => game);
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading, selectPitchesIsLoading, selectUsersIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectHasLoaded = createSelector(selectRoot, ({ hasLoaded }) => hasLoaded);
export const selectIsEditing = createSelector(selectRoot, ({ isEditing }) => isEditing);
export const selectEditedGame = createSelector(selectRoot, ({ editedGame }) => editedGame);
export const selectEditableGame = createSelector(
  [ selectIsEditing, selectGame, selectEditedGame ],
  (isEditing, game, editedGame) => isEditing ? editedGame : game
);

export const selectEnrollments = createSelector(selectGame, ({ enrollments }) => enrollments);
export const selectEnrollmentStatus = createSelector(
  [ selectCurrentUserId, selectEnrollments ],
  (currentUserId, enrollments) => (enrollments.find(
    ({ userId }) => userId === currentUserId
  ) || {}).enrollmentStatus
);
export const selectEnrolledUsers = createSelector(
  [ selectEnrollments, selectUsers ],
  (enrollments, users) => enrollments.map(({ userId }) => findById(users, userId))
);
export const selectEnrolledUsersPerStatus = createSelector(
  [ selectEnrolledUsers, selectEnrollments ],
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
export const selectNumberOfEnrollments = createSelector(
  [ selectEnrollments ],
  (enrollments) => enrollments.filter(
    ({ enrollmentStatus }) => enrollmentStatus === ENROLLMENT_STATUS_YES
  ).length
);

export const selectPitchId = createSelector(selectGame, ({ pitchId }) => pitchId);
export const selectPitch = createSelector([ selectPitches, selectPitchId ], findById);
export const selectPitchName = createSelector(selectPitch, ({ name }) => name);
export const selectTeamA = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamB = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamAScore = createSelector(selectEditableGame, ({ teamAScore }) => teamAScore);
export const selectTeamBScore = createSelector(selectEditableGame, ({ teamBScore }) => teamBScore);
export const selectTeamAUsers = createSelector([ selectUsers, selectTeamA ], mapUsersIdsToUsers);
export const selectTeamBUsers = createSelector([ selectUsers, selectTeamB ], mapUsersIdsToUsers);
export const selectDate = createSelector(selectGame, ({ date }) => date);
export const selectDuration = createSelector(selectGame, ({ duration }) => duration);
export const selectTime = createSelector(selectGame, ({ time }) => time);
