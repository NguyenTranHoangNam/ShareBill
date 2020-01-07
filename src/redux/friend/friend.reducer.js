import { GET_FRIEND_GROUPS } from "./friend.type";
import {store} from '../../saga/store';
const initState = {
  listFriends: [
    "khao@gmail.com",
    "nloan@gmail.com",
    "tkien@gmail.com"
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
