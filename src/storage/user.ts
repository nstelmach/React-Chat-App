import { User } from "../models/user.ts";

export const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem("user");
  if (user) {
    return JSON.parse(user) as User;
  }
  return null;
};
