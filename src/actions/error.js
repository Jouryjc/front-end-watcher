
export const DEL_REQUEST = 'DEL_REQUEST'
export const ADD_REQUEST = 'ADD_REQUEST'
export const ADD_SUCCESS = 'ADD_SUCCESS'

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
        resolve()
    }).then((error) => {
        console.log(error)
    })

}

export const add_success = (state) => ({
    type: ADD_SUCCESS,
    state
})



