import { increment,login } from "./types";

export const incrementAction = () => {
  return {
    type: increment,
  };
};

export const loginAction = (state) => {
  return {
    type: login,
    paylod: {...state}
  }
}