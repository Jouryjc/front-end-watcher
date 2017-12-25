import { request } from '../utils/request'
import axios from 'axios'

export const GET_USER = 'GET_USER'
export const ADD_USER = 'ADD_USER'

const getUserInfo = userInfo => ({
    type: GET_USER,
    userInfo
})
/*
export const getUser = () => async (dispatch , getState) => {
    try{
        let respone = await axios.get('/user')
        console.log(respone)
        await dispatch(getUserInfo(respone))
    }catch(error) {
        console.log(error)
    }
}*/

export const getUser = () => (dispatch , getState) => {
    axios.post('/user' , {}).then(function(responce) {
        console.log(responce)
        if(responce && responce.status == 0) {
            dispatch(getUserInfo())
        }
    }).catch(function (error) {
        console.log(error);
    });
}

export const addUser = (info) => (dispatch , getState) => {
    console.log(info);
    axios.post('/user' , {name:info.name , age: info.age}).then(function(responce) {
        console.log(responce)
        if(responce && responce.status == 0) {

        }
    }).catch(function (error) {
        console.log(error);
    });
}