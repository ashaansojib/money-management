import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moneyCounter = createApi({
  reducerPath: "moneyCounter",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9988/api" }),
  endpoints: (builder) => ({
    moneyCounterByCat: builder.query({
      query: () => "/money-counter",
    }),
    addMoneyCounter: builder.mutation({
      query: (data) => ({
        url: "/money-counter",
        method: "POST",
        body: data,
      }),
    }),
    removeCards: builder.mutation({
      query: (id) => ({
        url: `/money-counter/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useMoneyCounterByCatQuery,
  useAddMoneyCounterMutation,
  useRemoveCardsMutation,
} = moneyCounter;
