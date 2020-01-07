import { GET_FRIEND_GROUPS } from "./user.type";
import {store} from '../../saga/store';
const initState = {
  listUsers: {
    "khao@gmail.com":{
      id:1,
      email: 'khao@gmail.com',
      fullname: "Kiên Hào",
      avatar: ""
    },
    "nloan@gmail.com":{
      id:1,
      email: 'nloan@gmail.com',
      fullname: "Ngọc Loan",
      avatar: ""
    },
    "tkien@gmail.com":{
      id:1,
      email: 'tkien@gmail.com',
      fullname: "Trung Kiên",
      avatar: ""
    },
  }
   

};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
