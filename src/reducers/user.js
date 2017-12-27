import { combineReducers } from 'redux'
import { ADD_USER , GET_USER , LOG_OUT} from '../actions/user'
import { userInfo } from "../model/data"
import axios from 'axios'

// const userInfo = () => {
//
// }


const userReducer = (state = userInfo , action) => {
    switch (action.type) {
        case 'LOG_OUT':
            return {...state , logIn: false}
            break;
        default:
            return state
    }
}


export default userReducer
