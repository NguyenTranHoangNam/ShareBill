import { GET_TRANSACTION_BY_GROUP_ID } from './group.type'
import { store } from '../../saga/store'
import moment from 'moment'
import lodash from 'lodash'
export const getTransactionByGroupID =(groupId)=>  {
    const transactions = store.getState().transaction.transactions.filter(trans => trans.groupId === groupId)
    const transactionOfGroups = createSectionFromTransactionsData(transactions)
    return {
        type: GET_TRANSACTION_BY_GROUP_ID,
        transactionOfGroups
    }  
}

const createSectionFromTransactionsData = (transactions) => {
    let sectionList = [];
    let filterTrans = lodash.cloneDeep(transactions);

    filterTrans.map(transaction => {
        let title = 'Tháng ' + moment(transaction.createTime).format("MM/YYYY");
        let result = sectionList.filter(function (e) { return e.title === title });

        if (result.length > 0) {
            result[0].data.push(transaction);
        } else {
            sectionList.push({ title: title, data: [transaction] });
        }
    });
    return sectionList;
}