import { configureStore } from "@reduxjs/toolkit";
import totalBalanceReducer from "./features/slices/MainBalanceSlice";
import { moneyManageApi } from "./features/apis/MoneyManageApi";
export const store = configureStore({
  reducer: {
    totalBalance: totalBalanceReducer,
    [moneyManageApi.reducerPath]: moneyManageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moneyManageApi.middleware),
});
