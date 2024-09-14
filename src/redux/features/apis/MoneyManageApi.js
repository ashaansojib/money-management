import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moneyManageApi = createApi({
  reducerPath: "moneyManageApi",
  baseQuery: () => fetchBaseQuery({ baseUrl: "http://localhost:9988/api" }),
  tagTypes: ["money"],
  endpoints: (builder) => ({
    allMoneyManageList: builder.query({
      query: () => "/money-manage",
      providesTags: ["money"],
    }),
    addMoneyManageItem: builder.mutation({
      query: (data) => ({
        url: "/money-manage",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useallMoneyManageList, useaddMoneyManageItem } = moneyManageApi;
