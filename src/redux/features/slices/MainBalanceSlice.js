import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalBalance: 0,
};
const totalBalanceSlice = createSlice({
  name: "totalBalance",
  initialState,
  reducers: {
    addToBalance: (state, action) => {
      state.totalBalance += action.payload;
    },
  },
});
export const { addToBalance } = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;
