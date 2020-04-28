import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects'
import * as authenticationActions from '../actions/authentication'
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../actions/types'

function* signIn(action) {
  console.log('action >', action)
  const { username, password, formHelpers } = action.payload

  // yield formHelpers.setSubmitting(true)
}

function* watchSignInRequest() {
  console.log('watchSignInRequest ')
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

const authenticationSagas = [
  fork(watchSignInRequest)
]

export default authenticationSagas
