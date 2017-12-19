import { combineReducers } from 'redux'
import { DEL_REQUEST , ADD_REQUEST , ADD_SUCCESS , EDIT_REQUEST } from '../actions/error'
import { userInfo } from "../model/data"


const userReducer = (state = userInfo , action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default userReducer
