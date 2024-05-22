import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Post {
  id: number;
  name: string;
}

export const postApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:300/" }),
  reducerPath: "postApi",
  endpoints: (build) => ({
    getPost: build.query<Post[], number>({
      query: () => `posts`,
      transformResponse: (result: Post[]) => {
        console.log(result);
        return result;
      },
      transformErrorResponse: (error) => {
        return error;
      },
    }),
  }),
});

export const { useGetPostQuery, useLazyGetPostQuery } = postApi;
