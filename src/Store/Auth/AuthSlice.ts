import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

const initialState: any = {
  user: (() => {
    try {
      const data = sessionStorage.getItem("userdata");
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  })(),
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
      state.LoginLoader = false;
      state.LoginError = false;
      state.user = action.payload.userData;
      state.token = action.payload.token;
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem(
        "userdata",
        JSON.stringify(action.payload.userData)
      );
    },
    loginError: (state) => {
      state.LoginLoader = false;
      state.LoginError = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      sessionStorage.removeItem("token");
    },
  },
});

export const { loginLoading, loginSuccess, loginError, logout } =
  LoginSlice.actions;
export default LoginSlice.reducer;
