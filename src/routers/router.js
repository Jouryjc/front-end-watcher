import { Route , IndexRoute } from 'react-router'
import React from 'react'

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

const register = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/user/Register').default)
    }, 'register')
}

const login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/user/LogIn').default)
    }, 'login')
}

const notmatch = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Error').default)
    }, 'notmatch')
}


const routes = (
    <Route>
        <Route path="/" getComponent={main}>
            <IndexRoute getComponent={error}/>
            <Route path="/app" getComponent={app} />
            <Route path="/register" getComponent={register} />
            <Route path="/login" getComponent={login} />
            <Route path="/error" getComponent={error} />
            <Route path="/addError" getComponent={addError}/>
            <Route path="*" getComponent={notmatch} />
        </Route>
    </Route>
)

export default routes
