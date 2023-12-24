import { apiSlice } from "../api/apiSlice";

export const MyProfilePageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    MyProfilePageUserProfileInfo: builder.query({
      query: () => ({ url: "/user/profile/" }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log('inside accountInformation endpoint  result = ', result);
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useMyProfilePageUserProfileInfoQuery } = MyProfilePageApi;
