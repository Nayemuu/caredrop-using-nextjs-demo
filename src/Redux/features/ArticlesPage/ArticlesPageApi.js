"use client";

import { apiSlice } from "../api/apiSlice";

export const ArticlesPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    articlesPagePopularArticles: builder.query({
      query: ({ limit, offset }) => ({
        url: `/blog/popular-blog-list/?limit=${limit}&offset=${offset}`,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log("api calling");
          const result = await queryFulfilled;
          // console.log('inside authApi logout endpoint  result = ', result);
          // console.log("api called");
        } catch (error) {
          console.log("error = ", error);
        }
      },
    }),
  }),
});

export const { useArticlesPagePopularArticlesQuery } = ArticlesPageApi;
