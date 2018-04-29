import moment from 'moment';
import { javaToUnixTimestamp, model } from 'utils';
import { DATE_FORMAT, ENROLLMENT_STATUS_YES, TIME_FORMAT } from 'constants';

export const EnrollmentModel = model({
  getDefaultAttributes: () => ({
    enrollmentStatus: ENROLLMENT_STATUS_YES,
    userId: undefined
  }),

  fromServerFormat(serverResponse) {
    return new EnrollmentModel({
      enrollmentStatus: serverResponse.enrollmentStatus,
      userId: serverResponse.userId
    });
  }
});

const GameModel = model({
  getDefaultAttributes: () => ({
    date: '1970/01/01',
    duration: 0,
    enrollments: [],
    id: undefined,
    isEnrollmentOver: undefined,
    isGameOver: undefined,
    pitch: {},
    pitchId: undefined,
    teamA: [],
    teamAScore: undefined,
    teamB: [],
    teamBScore: undefined,
    time: '00:00'
  }),

  fromServerFormat(serverResponse) {
    const date = moment(javaToUnixTimestamp(serverResponse.startTimestamp));

    return new GameModel({
      date: date.format(DATE_FORMAT),
      duration: serverResponse.durationInMinutes,
      enrollments: serverResponse.enrollments.map(EnrollmentModel.fromServerFormat),
      id: serverResponse.id,
      isEnrollmentOver: serverResponse.isEnrollmentOver,
      isGameOver: serverResponse.isGameOver,
      pitchId: serverResponse.pitchId,
      teamA: [ ...serverResponse.teamAIds ],
      teamAScore: serverResponse.teamAScore,
      teamB: [ ...serverResponse.teamBIds ],
      teamBScore: serverResponse.teamBScore,
      time: date.format(TIME_FORMAT)
    });
  }
});

export default GameModel;
