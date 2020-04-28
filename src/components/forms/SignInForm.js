import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({

})

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={ { username: '', password: '' } }
      validationSchema={ SignupSchema }
      onSubmit={ (values, formikHelpers) => {
        console.log(values)
        onSubmit(values, formikHelpers)
      } }
    >
      { props => (
        <Form>
          <Field type="email" name="username"/>
          <Field type="password" name="password"/>
          <button type="submit" disabled={ props.isSubmitting }>
            Submit
          </button>
        </Form>
      ) }
    </Formik>
  )
}

export default SignInForm
