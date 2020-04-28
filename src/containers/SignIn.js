import React from 'react'
import { useDispatch } from 'react-redux'
import SignInForm from '../components/forms/SignInForm'
import { signInRequest } from '../actions/authentication'

const SignIn = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = ({ username, password }, formikHelpers) => {
    console.log('Submiting values')

    dispatch(signInRequest({ username, password }, formikHelpers))
    // formikHelpers.setSubmitting(false)
  }

  return (
    <div>
      Sign In Page
      <SignInForm onSubmit={ handleFormSubmit }/>
    </div>
  )
}

export default SignIn
