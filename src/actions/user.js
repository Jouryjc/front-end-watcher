import { request } from '../utils/request'
import axios from 'axios'

export const GET_USER = 'GET_USER'
export const ADD_USER = 'ADD_USER'
export const LOG_OUT = 'LOG_OUT'

const getUserInfo = userInfo => ({
    type: GET_USER,
    userInfo
})

const logout = (userid) => ({
    type: LOG_OUT,
    userid
})

export const logoutReqRes = (userid) => ( dispatch ) => {
    dispatch(logout(userid))
    return {
        status: 0,
        description: "登出成功"
    }
}

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

export const addUser = (info) => async (dispatch , getState) => {
    try{
        const responce = await axios.post('/user/insert' , {...info});
        console.log(responce.data)
        return responce.data;
    }catch(error) {
        console.log(error);
    };
}

