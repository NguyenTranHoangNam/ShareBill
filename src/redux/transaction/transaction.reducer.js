import { CREATE_TRANSACTION } from './transaction.type';

const initState = {
    transactions: [],
};

export const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_TRANSACTION:
            return {
                transactions: action.transactions
            };
        default:
            return state
    }
}