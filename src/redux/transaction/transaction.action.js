import { DECREMENT, INCREMENT, CREATE_TRANSACTION } from './transaction.type'
import {store} from './../../saga/store';

export const createTransaction = (transaction) => {
    let transactions = store.getState().transaction.transactions;
    transactions.push(transaction);
    return {
        type: CREATE_TRANSACTION,
        transactions
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