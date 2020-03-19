/* eslint-disable require-jsdoc */

export default {
  signupData: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidFirstname: {
    firstName: 'Jo 3hn',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidLastname: {
    firstName: 'John',
    lastName: 'Do 3e',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidUsername: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdo,e',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidEmail: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidGender: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'none',
  },
  invalidPassword: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'hellowo',
    gender: 'Male',
  },
  invalidAddress: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kiga 3li',
    password: 'helloworld3',
    gender: 'Male',
  },
  realLoginDataFromTheDb: {
    email: 'john@doe.com',
    password: 'helloworld3'
  },
  realLoginDataFromTheDb2: {
    email: 'admin@admin.com',
    password: 'helloworld3'
  },
  realLoginDataFromTheDb1: {
    username: 'Jdoe',
    password: 'helloworld3'
  },
  WrongLoginPasswordData: {
    email: 'john@doe.com',
    password: '12334ewe'
  },
  WrongLoginEmailData: {
    email: 'emmamugi@gmail.com',
    password: 'helloworld3'
  },
  emptyLoginPassword: {
    email: 'john@doe.com',
    password: ''
  },
  emptyLoginEmail: {
    email: '',
    password: 'hheerr'
  },
  userRoleData: {
    email: 'user@user.com',
    role: 'manager'
  },
  userRoleDataEmailNotExist: {
    email: 'userrrr@user.com',
    role: 'manager'
  },
  invalidEmailForUserRole: {
    email: 'useruser.com',
    role: 'manager'
  },
  emptyEmailForUserRole: {
    email: '',
    role: 'manager'
  },
  invalidRoleForUserRole: {
    email: 'user@user.com',
    role: 'test'
  }
};
