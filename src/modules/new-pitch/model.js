import { model } from 'utils';
import { PITCH_MAX_CAPACITY, PITCH_MIN_CAPACITY } from 'constants';
import { isInteger, isNotEmptyString } from 'utils/validation';

const NewPitchModel = model({
  getDefaultAttributes: () => ({
    address: undefined,
    minCapacity: 6,
    maxCapacity: 10,
    name: undefined,
    type: undefined
  }),

  validators: {
    isAddressValid({ address }) {
      return isNotEmptyString(address);
    },

    isCapacityValid({ minCapacity, maxCapacity }) {
      return [
        NewPitchModel.isMinCapacityValid({ minCapacity }),
        NewPitchModel.isMaxCapacityValid({ maxCapacity }),
        minCapacity <= maxCapacity
      ].every(Boolean);
    },

    isMinCapacityValid({ minCapacity }) {
      return isInteger(minCapacity) && minCapacity >= PITCH_MIN_CAPACITY;
    },

    isMaxCapacityValid({ maxCapacity }) {
      return isInteger(maxCapacity) && maxCapacity <= PITCH_MAX_CAPACITY;
    },

    isNameValid({ name }) {
      return isNotEmptyString(name);
    },

    isTypeValid({ type }) {
      return isNotEmptyString(type);
    }
  },

  toServerFormat(newPitchModel) {
    const { address, minCapacity, maxCapacity, name, type } = newPitchModel;

    return {
      address,
      minNumberOfPlayers: minCapacity,
      maxNumberOfPlayers: maxCapacity,
      name,
      pitchType: type
    };
  }
});

export default NewPitchModel;
