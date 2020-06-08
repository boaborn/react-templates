import React from 'react'
import { useDispatch } from 'react-redux'
import SignInForm from '../components/forms/SignInForm'
import { signInRequest } from '../actions/authentication'
import Container from '@material-ui/core/Container'

const SignIn = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = ({ username, password }, formikHelpers) => {

    dispatch(signInRequest({ username, password }, formikHelpers))
    // formikHelpers.setSubmitting(false)
  }

  return (
    <Container className="sign-in-container">
      <h2>Sign In Page</h2>
      <div></div>
      <SignInForm
        className="sign-in_form"
        onSubmit={ handleFormSubmit }
      />

    </Container>
  )
}

export default SignIn
