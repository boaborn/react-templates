import authenticationSagas from './authenticationSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    ...authenticationSagas
  ])
}
