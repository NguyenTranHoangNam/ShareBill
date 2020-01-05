import { DECREMENT, INCREMENT, CREATE_TRANSACTION } from './transaction.type'

export const createTransaction = (transaction) => {
    return {
        type: CREATE_TRANSACTION,
        transaction
    }
}

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