import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isRefetch: false,
};

const RefetchSlice = createSlice({
  name: "refetch",
  initialState,
  reducers: {
    refetchTrue: (state) => {
      state.isRefetch = true;
    },
    refetchFalse: (state) => {
      state.isRefetch = false;
    },
  },
});

export const { refetchTrue, refetchFalse } = RefetchSlice.actions;
export default RefetchSlice.reducer;
