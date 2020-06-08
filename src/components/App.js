import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'

import Home from '../containers/Home'
import SignIn from '../containers/SignIn'
import Dashboard from '../containers/Dashboard'
import NotFound from '../containers/NotFound'

import PrivateRoute from '../components/PrivateRoute'

import { useDispatch } from 'react-redux'
import { signInOutSuccess } from '../actions/authentication'

const App = props => {

  const dispatch = useDispatch()

  const signIn = () => {
    localStorage.setItem('token', 'abcdefg')
  }

  const signOut = () => {
    dispatch(signInOutSuccess())
  }

  const refreshToken = () => {
    console.log('refresh token')
    localStorage.clear()
    localStorage.setItem('token', 'qwer')
  }
  console.log('props >', props)
  return (
    <div>
      <button onClick={ signIn }>Sign In</button>
      <button onClick={ signOut }>Sign Out</button>
      <button onClick={ refreshToken }>Refresh Token</button>

      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/signin" exact component={ SignIn }/>
          <PrivateRoute path="/dashboard" exact component={ Dashboard }/>
          <Route path="*" exact component={ NotFound }/>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
