import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './theme/styles.css'
import App from './components/App'
import rootSaga from './sagas'
import reducers from './reducers'

// Hook Chrome Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create a redux saga as middileware
const sagaMiddleware = createSagaMiddleware()

// Create a redux store and mount saga middleware
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

// run saga middleware after its being mounted
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
