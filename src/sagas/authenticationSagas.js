import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects'
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../actions/types'
import * as api from '../api/authentication'

function* signIn(action) {
  console.log('action >', action)
  try {
    const { username, password, formHelpers } = action.payload
    const response = yield call(api.signIn, { username, password })
    // Dispatch a Sign in sucess action

    // set form submitting status to false
    yield formHelpers.setSubmitting(false)
  } catch (e) {

  }

  //
}

function* watchSignInRequest() {
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

const authenticationSagas = [
  fork(watchSignInRequest)
]

export default authenticationSagas
