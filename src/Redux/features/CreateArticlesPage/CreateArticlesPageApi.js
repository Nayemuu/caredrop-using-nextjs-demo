/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { getUpdatedMyBlogList } from '@/Actions/CreateArticlesPageActions';
import { apiSlice } from '../api/apiSlice';

export const CreateArticlesPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateArticlesPageCreateArticle: builder.mutation({
      query: (data) => ({
        url: '/blog/create-blog/',
        method: 'POST',
        body: data,
        formData: true,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('inside createArticleApi arg = ', arg);
          const result = await queryFulfilled;
          getUpdatedMyBlogList();
          // console.log('inside createArticleApi  result = ', result);
        } catch (error) {
          // console.log('inside createArticleApi  result = ', error);
        }
      },
    }),

    blogCategory: builder.query({
      query: () => ({ url: '/blog/category/' }),
    }),
  }),
});

export const {
  useCreateArticlesPageCreateArticleMutation,
  useBlogCategoryQuery,
} = CreateArticlesPageApi;
