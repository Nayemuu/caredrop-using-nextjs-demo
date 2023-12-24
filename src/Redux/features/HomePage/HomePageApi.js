"use client";

import { apiSlice } from "../api/apiSlice";

const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["homePagePopularArticles"],
});
export const HomePageApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    homePagePopularArticles: builder.query({
      query: ({ limit, offset }) => ({
        url: `/blog/popular-blog-list/?limit=${limit}&offset=${offset}`,
      }),
      providesTags: ["homePagePopularArticles"],
    }),
  }),
});

export const { useHomePagePopularArticlesQuery } = HomePageApi;
