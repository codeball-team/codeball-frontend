import moment from 'moment';
import { model, unixToJavaTimestamp } from 'utils';
import { isId, isInRange, isInteger, isPositiveInteger } from 'utils/validation';

const NewGameModel = model({
  getDefaultAttributes: () => ({
    date: undefined,
    duration: undefined,
    hour: 18,
    minute: 0,
    pitchId: undefined
  }),

  validators: {
    isDateValid({ date }) {
      return isPositiveInteger(date);
    },

    isDurationValid({ duration }) {
      return isPositiveInteger(duration);
    },

    isTimeValid({ hour, minute }) {
      return NewGameModel.isHourValid({ hour }) && NewGameModel.isMinuteValid({ minute });
    },

    isHourValid({ hour }) {
      return isInteger(hour) && isInRange(hour, 0, 23);
    },

    isMinuteValid({ minute }) {
      return isInteger(minute) && isInRange(minute, 0, 59);
    },

    isPitchIdValid({ pitchId }) {
      return isId(pitchId);
    }
  },

  toServerFormat(newGameModel) {
    const { date, duration, hour, minute, pitchId } = newGameModel;
    const startTimestamp = moment(date)
      .add(hour, 'hours')
      .add(minute, 'minutes')
      .valueOf();

    return {
      startTimestamp: unixToJavaTimestamp(startTimestamp),
      durationInMinutes: duration,
      pitchId
    };
  }
});

export default NewGameModel;
