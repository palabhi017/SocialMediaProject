import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import commentReducer from "./Comment/commentSlice"
import RefetchReducer from "./Refetch/RefetchSlice";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    commentReducer: commentReducer,
    RefetchReducer
  },
});
