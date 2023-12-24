"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://caredrop.api-care-box.click/care-drop/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    // console.log('in apiSlice prepareHeaders, token = ', token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let results = await baseQuery(args, api, extraOptions);
    //console.log("results = ", results);

    if (results?.error?.status === 401) {
      // console.log("results.error.status = ",results.error.status);
      const accessToken = api.getState()?.auth?.accessToken;
      // console.log("accessToken = ", accessToken);
      if (accessToken) {
        api.dispatch(cleraMyProfileInfo());
        api.dispatch(userLoggedOut());
        api.dispatch(clearLogOutMessage());
        localStorage.clear();
        api.dispatch(apiSlice.util.resetApiState());
      }
    }

    return results;
  },
  endpoints: () => ({}),
});
