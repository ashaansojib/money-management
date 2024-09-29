import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
};
export const totalCounterSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.totalBalance += action.payload;
    },
  },
});
export const { increment } = totalCounterSlice.actions;
export default totalCounterSlice.reducer;
