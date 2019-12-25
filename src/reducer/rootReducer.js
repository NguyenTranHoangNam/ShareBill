import {combineReducers} from 'redux';
import transactionReducer from '../screens/transaction/update/reducer/transactionReducer';

const rootReducer = combineReducers({transactionReducer})
export default rootReducer