import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/types'

import { TOKEN } from '../utils/constants'

import { getValueByKeyFromLocalStorage } from '../utils'

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  token: getValueByKeyFromLocalStorage(TOKEN)
}

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state
  }
}
