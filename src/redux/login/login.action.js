import { LOGIN } from './login.type'


export const login =(data)=>  {
    return {
        type: LOGIN,
        data
    }  
}