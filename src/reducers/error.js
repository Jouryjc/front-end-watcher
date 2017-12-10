import { combineReducers } from 'redux'
import { DEL_REQUEST } from '../actions/error'
import { dataSource } from "../model/data"

const del = (state = dataSource , action) => {
    switch (action.type) {
        case 'DEL_REQUEST':
            console.log(action)
            let delArray = state.filter((item) => (item.key != action.id))
            return delArray
            break;
        default:
            return state
    }
}

export default del
