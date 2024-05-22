import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const animalsApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "animalApi",
  tagTypes: ["Animal"],
  endpoints: (builder) => ({
    getAnimals: builder.query<
      { animals: any; count: number },
      { page: number; limit: number; keyword?: string }
    >({
      providesTags: ["Animal"],
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
          ? `animals/?limit=${limit}&current_page=${page}&search=${keyword}`
          : `animals/?limit=${limit}&current_page=${page}`,
      transformResponse: ({ data, total }: { data: any; total: number }) => {
        return {
          count: total,
          animals: data.map((animal: any) => ({
            id: animal.id,
            name: animal.nom,
            race: animal.race,
            views: animal.views,
            habitatId: animal.habitat_id,
            images: animal.images.map((image: any) => image.path),
            createdAt: animal.date_creation,
          })),
        };
      },
    }),
    createAnimal: builder.mutation<
      any,
      { name: string; race: string; habitatId: number; images?: File[] }
    >({
      invalidatesTags: ["Animal"],
      query: (newAnimal) => {
        const formData = new FormData();
        formData.append("nom", newAnimal.name);
        formData.append("race", newAnimal.race);
        formData.append("habitat_id", newAnimal.habitatId.toString());
        newAnimal.images?.forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
        return {
          url: "animals",
          method: "POST",

          body: formData,
        };
      },
    }),
    updateAnimal: builder.mutation<
      any,
      {
        id: number;
        name?: string;
        race?: string;
        habitatId?: number;
        images?: File[];
      }
    >({
      invalidatesTags: ["Animal"],
      query: ({ id, ...updatedFields }) => {
        const formData = new FormData();
        updatedFields.name && formData.append("nom", updatedFields.name);
        updatedFields.race && formData.append("race", updatedFields.race);
        updatedFields.habitatId &&
          formData.append("habitat_id", updatedFields.habitatId.toString());

        updatedFields.images &&
          updatedFields.images?.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
        return {
          url: `animals/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteAnimal: builder.mutation<any, { id: number }>({
      invalidatesTags: ["Animal"],
      query: ({ id }) => ({
        url: `animals/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAnimalsQuery,
  useCreateAnimalMutation,
  useUpdateAnimalMutation,
  useDeleteAnimalMutation,
} = animalsApi;
