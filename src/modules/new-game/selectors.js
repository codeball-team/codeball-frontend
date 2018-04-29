import moment from 'moment';
import { createSelector } from 'reselect';
import {
  DATE_FORMAT,
  DURATION_OPTIONS,
  HOUR_OPTIONS,
  MINUTE_OPTIONS
} from 'constants';
import { findLabelByValue, padLeft } from 'utils';
import NewGameModel from 'new-game/model';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';
import { selectIsLoading as selectPitchesIsLoading, selectPitchesOptions } from 'pitches/selectors';

export const selectRoot = (state) => state.newGame;
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectPitchesIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectPitchId = createSelector(selectRoot, ({ pitchId }) => pitchId);
export const selectPitchIdDisplayValue = createSelector(
  [ selectPitchesOptions, selectPitchId ],
  findLabelByValue
);
export const selectPitchIdIsValid = createSelector(selectRoot, NewGameModel.isPitchIdValid);
export const selectDuration = createSelector(selectRoot, ({ duration }) => duration);
export const selectDurationOptions = () => DURATION_OPTIONS;
export const selectDurationDisplayValue = createSelector(
  [ selectDurationOptions, selectDuration ],
  findLabelByValue
);
export const selectDurationIsValid = createSelector(selectRoot, NewGameModel.isDurationValid);
export const selectHour = createSelector(selectRoot, ({ hour }) => hour);
export const selectHourOptions = () => HOUR_OPTIONS;
export const selectMinute = createSelector(selectRoot, ({ minute }) => minute);
export const selectMinuteOptions = () => MINUTE_OPTIONS;
export const selectTimeDisplayValue = createSelector(
  [ selectHour, selectMinute ],
  (hour, minute) => `${padLeft(hour, 2)}:${padLeft(minute, 2)}`
);
export const selectTimeIsValid = createSelector(selectRoot, NewGameModel.isTimeValid);
export const selectDate = createSelector(selectRoot, ({ date }) => date);
export const selectMomentDate = createSelector(selectDate, moment);
export const selectSelectedDate = createSelector(
  [ selectDate, selectMomentDate ],
  (date, momentDate) => date && momentDate
);
export const selectDateDisplayValue = createSelector(selectMomentDate, (date) => date.format(DATE_FORMAT));
export const selectDateIsValid = createSelector(selectRoot, NewGameModel.isDateValid);
export const selectIsValid = createSelector(
  [ selectPitchIdIsValid, selectDurationIsValid, selectTimeIsValid, selectDateIsValid ],
  (...conditions) => conditions.every(Boolean)
);
