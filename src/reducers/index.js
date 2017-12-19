import { combineReducers } from 'redux'
import userReducer from './user'
import alloperations from './error'

export default combineReducers({
    userReducer,
    alloperations
})
