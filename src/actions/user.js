import { request } from '../utils/request'

export const GET_USER = 'GET_USER'

const getUserInfo = userInfo => ({
    type: GET_USER,
    userInfo
})

export const getUser = () => async (dispatch , getState) => {
    try{
        let respone = await request.get('/user')
        console.log(respone)
        await dispatch(getUserInfo(respone))
    }catch(error) {
        console.log(error)
    }

}