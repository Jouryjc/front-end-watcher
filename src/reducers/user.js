import { combineReducers } from 'redux'
import { ADD_USER , GET_USER } from '../actions/user'
// import { userInfo } from "../model/data"
import axios from 'axios'

const userInfo = () => {

}


const userReducer = (state = userInfo , action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default userReducer
