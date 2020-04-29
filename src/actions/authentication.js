import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS
} from './types'

export const signInRequest = ({ username, password }, formikHelpers) => {
  console.log('signInRequest')
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      username,
      password,
      formikHelpers
    }
  }
}

export const signInSuccess = data => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: data
  }
}
