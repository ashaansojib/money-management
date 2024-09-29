import { configureStore } from "@reduxjs/toolkit";
import { MoneyManageApi } from "./features/apis/MoneyManage";
import totalCountReducer from "./features/slice/TotalCounterSlice";
import { moneyCounter } from "./features/apis/MoneyCounter";

export const store = configureStore({
  reducer: {
    totalBalance: totalCountReducer,
    [MoneyManageApi.reducerPath]: MoneyManageApi.reducer,
    [moneyCounter.reducerPath]: moneyCounter.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      MoneyManageApi.middleware,
      moneyCounter.middleware,
    ]),
});
