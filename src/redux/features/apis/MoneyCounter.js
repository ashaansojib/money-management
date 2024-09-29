import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moneyCounter = createApi({
  reducerPath: "moneyCounter",
  baseQuery: fetchBaseQuery({ baseUrl: "https://softfirm-server.vercel.app/api" }),
  tagTypes: ["counter"],
  endpoints: (builder) => ({
    moneyCounterByCat: builder.query({
      query: () => "/money-counter",
      providesTags: ["counter"],
    }),
    addMoneyCounter: builder.mutation({
      query: (data) => ({
        url: "/money-counter",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["counter"],
    }),
    removeCards: builder.mutation({
      query: (id) => ({
        url: `/money-counter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["counter"],
    }),
  }),
});
export const {
  useMoneyCounterByCatQuery,
  useAddMoneyCounterMutation,
  useRemoveCardsMutation,
} = moneyCounter;
