import * as Yup from 'yup'

export const usernameSchema = Yup.string()
  .min(3, 'Must be at least 3 chracters')
  .max(50, 'Must be 50 characters or less')
  .email('Invalid email')
  .required('Email is required')

export const passwordSchema = Yup.string()
  .min(3, 'Must be at least 3 chracters')
  .max(50, 'Must be 50 characters or less')
  .required('Password is required')
