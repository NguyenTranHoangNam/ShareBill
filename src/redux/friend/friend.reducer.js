import { GET_FRIEND_GROUPS } from "./friend.type";
import {store} from '../../saga/store';
const initState = {
  listFriends: [
    {
      email: 'khao@gmail.com',
      fullname: "Kiên Hào",
      avatar: "",
      type: "Lend",
    quantity: 4500000,
    },
    {
      email: 'nloan@gmail.com',
      fullname: "Ngọc Loan",
      avatar: "",type: "Lend",
      quantity: 4500000,
    },
    {
      email: 'tkien@gmail.com',
      fullname: "Trung Kiên",
      avatar: "",
      type: "Lend",
    quantity: 4500000,
    }
  ],
  friendGroups:[]
};

export const friendReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FRIEND_GROUPS:
      return {
        ...state,
        friendGroups: action.friendGroups 
      };
    default:
      return state;
  }
};
