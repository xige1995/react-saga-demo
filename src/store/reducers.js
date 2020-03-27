import { increment,login } from "./types";

const initState = {
  number: 0,
};

const incrementReducer = (state = initState, action) => {
  switch (action.type) {
    case increment: {
      state.number += 1;
      return { ...state };
      break;
    }
    case login: {

      break;
    }
    default:
      return state;
  }
};

export default incrementReducer;
