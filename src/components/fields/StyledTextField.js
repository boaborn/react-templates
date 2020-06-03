import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {

  }
})

const StyledTextField = ({ field, form, ...props }) => {
  const errorMsg = (form.errors[field.name] && form.touched[field.name]) ? form.errors[field.name] : ''
  const classes = useStyles()

  return (
    <>
      <TextField
        className={ classes.root }
        { ...field }
        { ...props }
        error={ Boolean(errorMsg) }
        helperText={ errorMsg }
      />
    </>
  )

}

export default StyledTextField
