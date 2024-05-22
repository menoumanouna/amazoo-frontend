import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const habitatsApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "habitatApi",
  tagTypes: ["Habitat"],
  endpoints: (builder) => ({
    getHabitats: builder.query<
      { habitats: any; count: number },
      { page: number; limit: number; keyword?: string }
    >({
      providesTags: ["Habitat"],
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
          ? `habitats/?limit=${limit}&current_page=${page}&search=${keyword}`
          : `habitats/?limit=${limit}&current_page=${page}`,
      transformResponse: ({ data, total }: { data: any; total: number }) => {
        return {
          count: total,
          habitats: data.map((habitat: any) => ({
            id: habitat.id,
            name: habitat.nom,
            description: habitat.description,
            categoryId: habitat.category_id,
            images: habitat.images.map((image: any) => image.path),
            animals: habitat.animals.map((animal: any) => ({
              id: animal.id,
              name: animal.nom,
              images: animal.images.map((image: any) => image.path),
            })),
            createdAt: habitat.date_creation,
          })),
        };
      },
    }),
    createHabitat: builder.mutation<
      any,
      {
        name: string;
        description: string;
        images?: File[];
        categoryId: number;
      }
    >({
      invalidatesTags: ["Habitat"],
      query: (newHabitat) => {
        const formData = new FormData();
        formData.append("nom", newHabitat.name);
        formData.append("description", newHabitat.description);
        formData.append("category_id", newHabitat.categoryId.toString());
        newHabitat.images?.forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
        return {
          url: "habitats",
          method: "POST",

          body: formData,
        };
      },
    }),
    updateHabitat: builder.mutation<
      any,
      {
        id: number;
        name?: string;
        description?: string;
        categoryId?: number;
        images?: File[];
      }
    >({
      invalidatesTags: ["Habitat"],
      query: ({ id, ...updatedFields }) => {
        const formData = new FormData();
        updatedFields.name && formData.append("nom", updatedFields.name);
        updatedFields.description &&
          formData.append("description", updatedFields.description);
        updatedFields.categoryId &&
          formData.append("category_id", updatedFields.categoryId.toString());

        updatedFields.images &&
          updatedFields.images?.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
        return {
          url: `habitats/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteHabitat: builder.mutation<any, { id: number }>({
      invalidatesTags: ["Habitat"],
      query: ({ id }) => ({
        url: `habitats/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetHabitatsQuery,
  useCreateHabitatMutation,
  useUpdateHabitatMutation,
  useDeleteHabitatMutation,
} = habitatsApi;
