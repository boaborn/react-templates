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

// Add redux saga as middileware
const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(rootSaga)

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
