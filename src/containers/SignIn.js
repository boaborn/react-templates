import React from 'react'
import SignInForm from '../components/forms/SignInForm'

const SignIn = () => {
  const handleFormSubmit = (values, formikHelpers) => {
    console.log('Submiting values')

    formikHelpers.setSubmitting(false)
  }

  return (
    <div>
      Sign In Page
      <SignInForm onSubmit={ handleFormSubmit }/>
    </div>
  )
}

export default SignIn
