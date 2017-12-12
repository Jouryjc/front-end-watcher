import { combineReducers } from 'redux'
import { DEL_REQUEST , ADD_REQUEST , ADD_SUCCESS } from '../actions/error'
import { dataSource } from "../model/data"
const Mock = require('mockjs')

const alloperations = (state = dataSource , action) => {
    switch (action.type) {
        case 'DEL_REQUEST':
            console.log(action)
            let delArray = state.filter((item) => (item.key != action.id))
            return delArray
            break;
        case 'ADD_REQUEST':
            console.log(action)
            return [...state , {
                key: state.length,
                time: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
                status: action.newItem.status,
                errroInfo: action.newItem.errorInfo
            }]
            break;
        case 'ADD_SUCCESS':
            return [...state]
            break;
        default:
            return state
    }
}


export default alloperations
