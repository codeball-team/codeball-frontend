import _ from 'underscore';
import { createSelector } from 'reselect';
import {
  PITCH_MAX_CAPACITY,
  PITCH_MIN_CAPACITY,
  PITCH_TYPE_OPTIONS,
  PITCH_TYPE_STRING
} from 'constants';
import { formatRange } from 'utils';
import NewPitchModel from 'new-pitch/model';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

export const selectRoot = (state) => state.newPitch;
export const selectNewPitchPayload = createSelector(selectRoot, NewPitchModel.toServerFormat);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectAddress = createSelector(selectRoot, ({ address }) => address);
export const selectAddressDisplayValue = selectAddress;
export const selectAddressIsValid = createSelector(selectRoot, NewPitchModel.isAddressValid);
export const selectName = createSelector(selectRoot, ({ name }) => name);
export const selectNameDisplayValue = selectName;
export const selectNameIsValid = createSelector(selectRoot, NewPitchModel.isNameValid);
export const selectType = createSelector(selectRoot, ({ type }) => type);
export const selectTypeDisplayValue = createSelector(selectType, (type) => PITCH_TYPE_STRING[type]);
export const selectTypeIsValid = createSelector(selectRoot, NewPitchModel.isTypeValid);
export const selectTypeOptions = () => PITCH_TYPE_OPTIONS;
export const selectMaxCapacity = createSelector(selectRoot, ({ maxCapacity }) => maxCapacity);
export const selectMinCapacity = createSelector(selectRoot, ({ minCapacity }) => minCapacity);
export const selectCapacityDisplayValue = createSelector(
  [ selectMinCapacity, selectMaxCapacity ],
  formatRange
);
export const selectMaxCapacityOptions = createSelector(
  [ selectMinCapacity ],
  (minCapacity) => _.range(minCapacity, PITCH_MAX_CAPACITY + 1, 2)
);
export const selectMinCapacityOptions = createSelector(
  [ selectMaxCapacity ],
  (maxCapacity) => _.range(PITCH_MIN_CAPACITY, maxCapacity + 1, 2)
);
export const selectCapacityIsValid = createSelector(selectRoot, NewPitchModel.isCapacityValid);
export const selectIsValid = createSelector(
  [ selectAddressIsValid, selectNameIsValid, selectTypeIsValid, selectCapacityIsValid ],
  (...conditions) => conditions.every(Boolean)
);
