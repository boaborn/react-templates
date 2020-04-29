import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usernameSchema, passwordSchema } from './validationSchemas'

// Form validation schema
const SignInSchema = Yup.object().shape({
  username: usernameSchema,
  password: passwordSchema
})

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={ { username: '', password: '' } }
      validationSchema={ SignInSchema }
      onSubmit={ (values, formikHelpers) => {
        console.log('values >', values)
        onSubmit(values, formikHelpers)
      } }
    >
      { props => (
        <Form>
          <div>
            <Field name="username" type="email"/>
            <ErrorMessage name="username"/>
          </div>
          <div>
            <Field name="password" type="password"/>
            <ErrorMessage name="password"/>
          </div>
          <button type="submit" disabled={ props.isSubmitting }>
            Submit
          </button>
        </Form>
      ) }
    </Formik>
  )
}

export default SignInForm
