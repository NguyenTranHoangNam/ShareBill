import { GET_FRIEND_GROUPS } from "./friend.type";
import {store} from '../../saga/store';
const initState = {
  listFriends: [
    {
      id:1,
      email: 'khao@gmail.com',
      fullname: "Kiên Hào",
      avatar: ""

    },
    {
      id:2,
      email: 'nloan@gmail.com',
      fullname: "Ngọc Loan",
      avatar: ""
    },
    {
      id:3,
      email: 'tkien@gmail.com',
      fullname: "Trung Kiên",
      avatar: ""
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
