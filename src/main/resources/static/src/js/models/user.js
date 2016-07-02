import _ from 'underscore';

export default class UserModel {
  constructor(attributes) {
    _.extend(this, _({ ...attributes }).defaults({
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      pictureUrl: undefined,
      role: undefined
    }));
  }

  static fromServerFormat(serverResponse) {
    return new UserModel({
      id: serverResponse.id,
      email: serverResponse.email,
      firstName: serverResponse.firstName,
      lastName: serverResponse.lastName,
      role: serverResponse.role,
      pictureUrl: serverResponse.pictureUrl
    });
  }

  static example() {
    return new UserModel({
      id: 1,
      firstName: 'Codeball',
      lastName: 'Developer',
      email: 'development@codeball.com',
      pictureUrl: '',
      role: 'ROLE_ADMIN'
    });
  }
}
