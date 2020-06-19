// eslint-disable-next-line no-unused-vars
const initialState = {
  firstName: '',
  lastName: '',
  nickName: '',
  password: '',
  error: '',
}

// eslint-disable-next-line no-unused-vars,consistent-return
const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_FIRSTNAME':
      return {
        ...state,
        firstName: action.firstName,
      }
    case 'ADD_LASTNAME':
      return {
        ...state,
        lastName: action.lastName,
      }
    case 'ADD_NICKNAME':
      return {
        ...state,
        nickName: action.nickName,
      }
    case 'ADD_PASSWORD':
      return {
        ...state,
        password: action.password,
      }
    case 'THROW_ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default reducer
