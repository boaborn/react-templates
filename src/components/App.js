import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../history'
import Header from '../components/Header'

const App = () => {
  return (
    <div>
      <Router history={ history }>
        <div>
          <Header/>
        </div>
      </Router>
    </div>
  )
}

export default App
