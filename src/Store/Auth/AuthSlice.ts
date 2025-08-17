import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  token: token || null,
  LoginLoader: false,
  LoginError: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loginLoading: (state) => {
      state.LoginLoader = true;
      state.LoginError = false;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.LoginLoader = false;
      state.LoginError = false;
      state.user = action.payload.Name;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    loginError: (state) => {
      state.LoginLoader = false;
      state.LoginError = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginLoading, loginSuccess, loginError, logout } =
  LoginSlice.actions;
export default LoginSlice.reducer;
