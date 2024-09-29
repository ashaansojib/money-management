import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moneyCounter = createApi({
  reducerPath: "moneyCounter",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9988/api" }),
  endpoints: (builder) => ({
    moneyCounterByCat: builder.query({
      query: (cat) => `/money-counter/${cat}`,
    }),
    addMoneyCounter: builder.mutation({
      query: (data) => ({
        url: "/money-counter",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useMoneyCounterByCatQuery, useAddMoneyCounterMutation } =
  moneyCounter;
