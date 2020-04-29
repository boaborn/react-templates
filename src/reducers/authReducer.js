import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from '../actions/types'

import { TOKEN } from '../utils/constants'

import {
  getValueByKeyFromLocalStorage,
  storeItemInLocalStorage
} from '../utils'

const INTIAL_STATE = {
  isAuthenticated: Boolean(getValueByKeyFromLocalStorage(TOKEN)),
  token: getValueByKeyFromLocalStorage(TOKEN)
}

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      storeItemInLocalStorage('token', action.payload.token)
      return { ...state, token: action.payload.token }
    case SIGN_OUT_SUCCESS:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state
  }
}
