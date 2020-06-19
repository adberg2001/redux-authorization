// eslint-disable-next-line no-shadow
export const firstName = (firstName) => ({
  type: 'ADD_FIRSTNAME',
  firstName,
})
// eslint-disable-next-line no-shadow
export const lastName = (lastName) => ({
  type: 'ADD_LASTNAME',
  lastName,
})
// eslint-disable-next-line no-shadow
export const nickName = (nickName) => ({
  type: 'ADD_NICKNAME',
  nickName,
})
// eslint-disable-next-line no-shadow
export const password = (password) => ({
  type: 'ADD_PASSWORD',
  password,
})
// eslint-disable-next-line no-shadow
export const error = (error) => ({
  type: 'THROW_ERROR',
  error,
})
