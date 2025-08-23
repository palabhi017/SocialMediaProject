import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import RefetchReducer from "./Refetch/RefetchSlice";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    RefetchReducer,
  },
});
