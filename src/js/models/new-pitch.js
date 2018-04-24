import { model } from 'utils';
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
        this.isMinCapacityValid({ minCapacity }),
        this.isMaxCapacityValid({ maxCapacity }),
        minCapacity <= maxCapacity
      ].every(Boolean);
    },

    isMinCapacityValid({ minCapacity }) {
      return isInteger(minCapacity) && minCapacity >= 2;
    },

    isMaxCapacityValid({ maxCapacity }) {
      return isInteger(maxCapacity) && maxCapacity <= 22;
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
