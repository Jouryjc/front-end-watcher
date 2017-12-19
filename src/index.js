import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware , combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// import rootReducer from './reducers/index'
import user from './reducers/user'
import dataSource from './reducers/error'
import router from './routers/router'
import { Router , browserHistory } from 'react-router';
import { syncHistoryWithStore , routerReducer } from 'react-router-redux'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
    combineReducers({
        user: user,
        dataSource: dataSource,
        routing: routerReducer
    }),
    applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => console.log(location))

render(
  <Provider store={store}>
    <Router history={ history }>
      {router}
    </Router>
  </Provider>,
  document.getElementById('root')
)
