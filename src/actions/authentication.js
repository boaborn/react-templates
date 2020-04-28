import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS
} from './types'

export const signInRequest = ({ username, password }, formHelpers) => {
  console.log('signInRequest')
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      username,
      password,
      formHelpers
    }
  }
}

export const signInSuccess = data => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: data
  }
}
