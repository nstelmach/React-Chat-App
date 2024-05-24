import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "../slice/chatSlice.ts";
import { userSlice } from "../slice/userSlice.ts";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    chat: chatSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});
