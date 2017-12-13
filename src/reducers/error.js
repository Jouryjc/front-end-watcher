import { combineReducers } from 'redux'
import { DEL_REQUEST , ADD_REQUEST , ADD_SUCCESS , EDIT_REQUEST } from '../actions/error'
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
            return [...state , {
                key: state.length + 1,
                time: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
                status: action.newItem.status,
                errorInfo: action.newItem.errorInfo
            }]
            break;
        case 'ADD_SUCCESS':
            return [...state]
            break;
        case 'EDIT_REQUEST':
            state.forEach((item) => {
                if(item.key === parseInt(action.item.id, 10)) {
                    item.time = Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
                    item.status = action.item.defaultSelect
                    item.errorInfo = action.item.errorInfo
                }
            })
            return [...state]
            break;
        default:
            return state
    }
}


export default alloperations
