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
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // )
