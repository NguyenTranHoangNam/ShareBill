import { INCREMENT, DECREMENT } from "./group.type";

const initState = {
  listGroups: [
    {
      id: 1,
      name: "Đài loan",
      url: "",
      avatar: "",
      member:['tkien@gmail.com','nloan@gmail.com']
    },
    {
      id: 2,
      name: "Thái lan",
      url: "",
      avatar: "",
      member:['tkien@gmail.com','khao@gmail.com']
    }
  ]
};

export const groupReducer = (state = initState, action) => {
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
      return state;
  }
};
