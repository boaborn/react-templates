import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import { usernameSchema, passwordSchema } from './validationSchemas'
import { TextField, Button } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'

// Form validation schema
const SignInSchema = Yup.object().shape({
  username: usernameSchema,
  password: passwordSchema
})

const renderTextField = ({ field, form, ...props }) => {
  const errorMsg = (form.errors[field.name] && form.touched[field.name]) ? form.errors[field.name] : ''

  return (
    <>
      <TextField
        { ...field }
        { ...props }
        // autoComplete="on"

        error={ Boolean(errorMsg) }
        helperText={ errorMsg }
      />
    </>
  )
}

const fields = [
  {
    name: 'username', // name of the state in formik
    label: 'Username'
  },
  {
    name: 'password',
    Label: 'password'
  }
]

const renderErrorMsg = status => {
  console.log('status >', status)
  if (typeof status === 'undefined'
  || typeof status.formStatus === 'undefined'
  ) {
    return null
  }

  console.log('here')
  if (status.formStatus === 'success') {
    return <div>Done!</div>
  }

  if (status.formStatus === 'error') {
    return <div>{ status.formErrorMsg }</div>
  }

}

const SignInForm = ({ onSubmit, className }) => {
  return (
    <Formik
      initialValues={ { username: 'admin@email.com', password: 'admin' } }
      validationSchema={ SignInSchema }
      onSubmit={ (values, formikHelpers) => {
        console.log('values >', values)
        formikHelpers.setStatus({})
        onSubmit(values, formikHelpers)
      } }
    >
      { props => (
        <Form className={ className || '' }
          style={ styles.formContainerStyle }
        >
          { renderErrorMsg(props.status) }
          <Field
            name="username"
            label="Username"
            variant="outlined"
            disabled={ props.isSubmitting }
            component={ renderTextField }
            fullWidth
            margin="normal"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="disabled"/>
                </InputAdornment>
              )
            } }
          />
          <Field
            name="password"
            label="Password"
            disabled={ props.isSubmitting }
            component={ renderTextField }
            fullWidth
            margin="normal"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="disabled"/>
                </InputAdornment>
              )
            } }
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
            margin="normal"
            disabled={ props.isSubmitting }
          >
            Submit
          </Button>
        </Form>
      ) }
    </Formik>
  )
}

export default SignInForm

const styles = {
  formContainerStyle: {
    maxWidth: 500,
    margin: '0 auto'
  }

}

