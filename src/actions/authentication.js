import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './types'

export const signInRequest = ({ username, password }, formikHelpers) => {
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

export const signInOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS
  }
}
