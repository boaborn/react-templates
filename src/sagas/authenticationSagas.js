import { takeEvery, takeLatest, take, call, fork, put, delay } from 'redux-saga/effects'
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../actions/types'
import * as api from '../api/authentication'
import { signInSuccess } from '../actions'

function* signIn(action) {
  console.log('action >', action)
  const { username, password, formikHelpers } = action.payload
  try {
    console.log('formikHelpers >', formikHelpers)
    const response = yield call(api.signIn, { username, password })

    // Dispatch a Sign in sucess action
    yield put(signInSuccess(response.data))

    // set form submitting status to false
    formikHelpers.setSubmitting(false)
    // set form status to success
    formikHelpers.setStatus({ formStatus: 'success' })

    yield delay(3000)
    formikHelpers.setStatus({ formStatus: '' })

  } catch (error) {
    // Set error msg for the form
    formikHelpers.setStatus({ formStatus: 'error', formErrorMsg: error.response.data.error })
    yield delay(3000)
    yield formikHelpers.setSubmitting(false)
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
