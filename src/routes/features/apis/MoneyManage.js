import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MoneyManageApi = createApi({
  reducerPath: "MoneyManageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9988/api",
  }),
  tagTypes: ["money"],
  endpoints: (builder) => ({
    AllMoneyItems: builder.query({
      query: () => "/money-manage",
      providesTags: ["money"],
    }),
    addMoneyItem: builder.mutation({
      query: (data) => ({
        url: "/money-manage",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["money"],
    }),
    moneyItemByCat: builder.query({
      query: (cat) => ({
        url: `/money-manage/${cat}`,
      }),
      providesTags: ["money"],
    }),
    removeMoneyItem: builder.mutation({
      query: (id) => ({
        url: `/money-manage/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["money"],
    }),
  }),
});

export const {
  useAllMoneyItemsQuery,
  useAddMoneyItemMutation,
  useMoneyItemByCatQuery,
  useRemoveMoneyItemMutation,
} = MoneyManageApi;
