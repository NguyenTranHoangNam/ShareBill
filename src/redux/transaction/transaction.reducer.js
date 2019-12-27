import { INCREMENT, DECREMENT } from './transaction.type';

const initState = {
    counter: 0
  };
  
  function transactionReducer(state = initState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          counter: state.counter + 1
        };
        case DECREMENT:
          return {
            counter: state.counter - 1
          };
      default:
        return state
    }
  }
  
  export default transactionReducer