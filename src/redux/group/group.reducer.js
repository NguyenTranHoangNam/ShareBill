import {
  INCREMENT,
  DECREMENT,
  GET_TRANSACTION_BY_GROUP_ID
} from "./group.type";

const initState = {
  listGroups: [
    {
      id: 1,
      name: "Đài loan",
      url: "",
      avatar: "",
      members: ["tkien@gmail.com", "nloan@gmail.com"]
    },
    {
      id: 2,
      name: "Thái lan",
      url: "",
      avatar: "",
      members: ["tkien@gmail.com", "khao@gmail.com"]
    }
  ],
  transactionsGroup: []
};

export const groupReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_BY_GROUP_ID:
      return {
        ...state,
        transactionsGroup: action.transactionOfGroups
      };

    default:
      return state;
  }
};
