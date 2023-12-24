"use client";

import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log("inside authApi arg = ", arg);
          const result = await queryFulfilled;
          // console.log("inside authApi  result = ", result);

          // console.log(
          //   "inside authApi  result.data.access_token = ",
          //   result.data.access_token
          // );
          dispatch(
            userLoggedIn({
              access_token: result.data.access_token,
            })
          );

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: result.data.access_token,
            })
          );

          // Set the current date
          let currentDate = new Date();

          // Calculate the expiration date (2 years from the current date)
          let expirationDate = new Date(currentDate);
          expirationDate.setFullYear(currentDate.getFullYear() + 2);

          // Format the expiration date in the required string format
          let expiresDateString = expirationDate.toUTCString();

          // Set the cookie with the expiration date

          document.cookie = `access_token = ${result.data.access_token}; expires=${expiresDateString};`;
        } catch (error) {
          //
          // console.log('yoo');
        }
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: "auth/logout/",
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('inside authApi arg = ', arg);
          const result = await queryFulfilled;
          // console.log('inside authApi logout endpoint  result = ', result);
          dispatch(userLoggedOut());
          // document.cookie = `access_token = ""`;

          let expiredDate = new Date(0).toUTCString();
          document.cookie = `access_token = ${result.data.access_token}; expires=${expiredDate};`;

          localStorage.clear();
          dispatch(apiSlice.util.resetApiState());
          // console.log('Everthing clear');
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
