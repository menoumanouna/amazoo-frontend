import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const usersApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<
      { users: any; count: number },
      { page: number; limit: number; keyword?: string }
    >({
      providesTags: ["User"],
      query: ({
        page,
        limit,
        keyword,
      }: {
        page: number;
        limit: number;
        keyword?: string;
      }) =>
        keyword
          ? `users/?limit=${limit}&current_page=${page}&search=${keyword}`
          : `users/?limit=${limit}&current_page=${page}`,
      transformResponse: ({ data, total }: { data: any; total: number }) => {
        return {
          count: total,
          users: data.map((user: any) => ({
            id: user.id,
            email: user.username,
            type: user.type,
            createdAt: user.date_creation,
          })),
        };
      },
    }),
    createUser: builder.mutation<
      any,
      {
        email: string;
        password: string;
        type: string;
        firstname: string;
        lastname: string;
      }
    >({
      invalidatesTags: ["User"],
      query: (newUser) => {
        return {
          url: `users/`,
          method: "POST",
          body: {
            username: newUser.email,
            type: newUser.type,
            password: newUser.password,
            // firstname: newUser.firstname,
            // lastname: newUser.lastname,
          },
        };
      },
    }),
    updateUser: builder.mutation<
      any,
      {
        id: number;
        email?: string;
        type?: string;
        firstname?: string;
        lastname?: string;
      }
    >({
      invalidatesTags: ["User"],
      query: ({ id, ...updatedFields }) => {
        return {
          url: `users/${id}`,
          method: "PATCH",
          body: {
            username: updatedFields.email,
            // type: updatedFields.type,
            // firstname: updatedFields.firstname,
            // lastname: updatedFields.lastname,
          },
        };
      },
    }),
    deleteUser: builder.mutation<any, { id: number }>({
      invalidatesTags: ["User"],
      query: ({ id }) => ({
        url: `users/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
