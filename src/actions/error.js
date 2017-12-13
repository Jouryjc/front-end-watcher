import { browserHistory } from 'react-router'
export const DEL_REQUEST = 'DEL_REQUEST'
export const ADD_REQUEST = 'ADD_REQUEST'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const EDIT_REQUEST = 'EDIT_REQUEST'

export const delItem = id => ({
    type: DEL_REQUEST,
    id
})

export const addItem = (newItem) => ({
    type: ADD_REQUEST,
    newItem
})

export const add = newItem => (dispatch , getState) => {
    dispatch(addItem(newItem))
    return new Promise((resolve, reject) => {
        dispatch(add_success(getState()))
        resolve(true)
    }).then((error) => {
        browserHistory.push('/error')
    })

}

export const add_success = (state) => ({
    type: ADD_SUCCESS,
    state
})

const editItem = (item) => ({
    type: EDIT_REQUEST,
    item
})

export const edit = item => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(editItem(item))
        resolve("data-edit-success")
    }).then((correct) => {
        return correct
    }, (err) => {
        return err
    })
}



