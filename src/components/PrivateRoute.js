import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated)

  console.log('isAuthenticated >', isAuthenticated)
  return (
    <Route
      { ...rest }
      render={ props =>
        isAuthenticated
          ? (<Component { ...props }/>)
          : (<Redirect to={ { pathname: '/signin', state: { from: props.location }} }/>)
      }
    />
  )
}

export default PrivateRoute
