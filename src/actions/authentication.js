import { SIGN_IN_REQUEST } from './types'

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
