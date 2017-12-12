import { Route } from 'react-router'
import React from 'react'

const mch = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/Mch').default)
  }, 'mch')
}

const app = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/App').default)
  }, 'app')
}

const main = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/Main').default)
  }, 'main')
}

const error = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/Delete').default)
  }, 'error')
}

const addError = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Add').default)
    }, 'addError')
}

const routes = (
  <Route>
    <Route path="/" getComponent={main}>
      <Route path="/mch" getComponent={mch} />
      <Route path="/app" getComponent={app} />
      <Route path="/error" getComponent={error} />
      <Route path="/addError" getComponent={addError}/>
    </Route>
  </Route>
);

export default routes
