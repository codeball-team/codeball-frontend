import { model } from 'utils';

const PitchModel = model({
  getDefaultAttributes: () => ({
    address: undefined,
    id: undefined,
    maxCapacity: 0,
    minCapacity: 0,
    name: '',
    type: undefined,
    url: undefined
  }),

  fromServerFormat(serverResponse) {
    return new PitchModel({
      address: serverResponse.address,
      id: serverResponse.id,
      maxCapacity: serverResponse.maxNumberOfPlayers,
      minCapacity: serverResponse.minNumberOfPlayers,
      name: serverResponse.name,
      type: serverResponse.pitchType
    });
  }
});

export default PitchModel;
