import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
});
