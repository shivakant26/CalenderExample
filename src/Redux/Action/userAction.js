import { SHOW_DATA , SET_DATA ,ADMIN_LOGIN } from "../actionType";

export const showData = (data) =>{
    return{
        type:SHOW_DATA,
        payload:data
    }
}
export const setData = (data) =>{
    return{
        type:SET_DATA,
        payload:data
    }
}

export const adminLogin = (data) =>{
    return{
        type:ADMIN_LOGIN,
        payload:data
    }
}