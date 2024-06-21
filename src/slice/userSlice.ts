import { getUserFromLocalStorage } from "../storage/user.ts";
import { User } from "../models/user.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../store/hooks.ts";

export type UserStore = {
  user: User | null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUserFromLocalStorage(),
  } as UserStore,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      const user = action.payload;

      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      return state;
    },
  },
});

export const { setUser } = userSlice.actions;

export const useUserSlice = () => {
  return useAppSelector((state) => state.user);
};
