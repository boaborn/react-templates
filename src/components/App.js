import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import history from '../history'
import Header from '../components/Header'

import Home from '../containers/Home'
import SignIn from '../containers/SignIn'
import Dashboard from '../containers/Dashboard'
import NotFound from '../containers/NotFound'

import PrivateRoute from '../components/PrivateRoute'

const App = () => {
  const signIn = () => {
    console.log('Sign In')
    localStorage.setItem('token', 'abcdefg')
  }

  const signOut = () => {
    console.log('Sign out')
    localStorage.clear()
  }

  const refreshToken = () => {
    console.log('refresh token')
    localStorage.clear()
    localStorage.setItem('token', 'qwer')
  }

  return (
    <div>
      <button onClick={ signIn }>Sign In</button>
      <button onClick={ signOut }>Sign Out</button>
      <button onClick={ refreshToken }>Refresh Token</button>

      <Router history={ history }>
        <Header/>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/signin" exact component={ SignIn }/>
          <PrivateRoute path="/dashboard" exact component={ Dashboard }/>
          <Route path="*" exact component={ NotFound }/>
        </Switch>
      </Router>

    </div>
  )
}

export default App
