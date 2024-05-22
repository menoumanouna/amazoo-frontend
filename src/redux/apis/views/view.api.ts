import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const viewsApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "viewsApi",
  tagTypes: ["Animal"],
  endpoints: (builder) => ({
    setView: builder.mutation<
      any,
      {
        animalId: number;
      }
    >({
      invalidatesTags: ["Animal"],
      query: (animalId) => {
        return {
          url: `animals/incrementViews/?animal_id=${animalId}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useSetViewMutation } = viewsApi;
