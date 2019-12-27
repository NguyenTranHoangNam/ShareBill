import { DECREMENT, INCREMENT } from './transaction.type'

export const decrement =()=>  {
    return {
        type: DECREMENT
    }  
}
export const increment =()=>  {
    return {
        type: INCREMENT
    }  
}