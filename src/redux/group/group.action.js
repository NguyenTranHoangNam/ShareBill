import { GET_TRANSACTION_BY_GROUP_ID } from './group.type'
import { store } from '../../saga/store'
import moment from 'moment'
export const getTransactionByGroupID =(groupId)=>  {
    const transactionGroups = store.getState().transaction.transactions.filter(trans => trans.groupId === groupId)
    const transactionOfGroups = transactionGroups.reduce((r, a) => {
        // r[moment(a.createTime).format('DD/YYYY')] = [...r[moment(a.createTime).format('DD/YYYY')] || [], a];
        r.title = moment(a.createTime).format('MM/YYYY') 
        r.data =  [...r[moment(a.createTime).format('MM/YYYY')] || [], a];
        return r;
       }, {});
       console.log(transactionOfGroups)
    return {
        type: GET_TRANSACTION_BY_GROUP_ID,
        transactionOfGroups
    }  
}
