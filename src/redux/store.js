import { configureStore } from "@reduxjs/toolkit";
import { MoneyManageApi } from "./features/apis/MoneyManage";

export const store = configureStore({
  reducer: {
    [MoneyManageApi.reducerPath]: MoneyManageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoneyManageApi.middleware),
});
