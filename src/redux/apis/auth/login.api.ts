import { createApi } from "@reduxjs/toolkit/query/react";
import { basicFetch } from "../../fetchBase/custom.fetch";

export const loginApi = createApi({
  baseQuery: basicFetch,
  reducerPath: "loginApi",
  endpoints: (build) => ({
    login: build.mutation<
      { token: string; user: any },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body: {
          username: body.email,
          password: body.password,
        },
      }),
      transformResponse: (response: any) => {
        return {
          token: response.data.token,
          user: response.data.account,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
