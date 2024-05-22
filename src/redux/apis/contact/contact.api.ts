import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const contactApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "contactApi",
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    sendContact: builder.mutation<
      any,
      {
        name: string;
        email: string;
        phoneNumber: string;
        description: string;
      }
    >({
      invalidatesTags: ["Contact"],
      query: (newContact) => {
        return {
          url: `email/send-email`,
          method: "POST",
          body: {
            name: newContact.name,
            email: newContact.email,
            phoneNumber: newContact.phoneNumber,
            description: newContact.description,
          },
        };
      },
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
