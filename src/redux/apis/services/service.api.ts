import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const servicesApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "serviceApi",
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getServices: builder.query<
      { services: any; count: number },
      { page: number; limit: number; keyword?: string }
    >({
      providesTags: ["Service"],
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
          ? `services/?limit=${limit}&current_page=${page}&search=${keyword}`
          : `services/?limit=${limit}&current_page=${page}`,
      transformResponse: ({ data, total }: { data: any; total: number }) => {
        return {
          count: total,
          services: data.map((service: any) => ({
            id: service.id,
            name: service.nom,
            description: service.description,
            horaire: service.horaire,
            images: service.images.map((image: any) => image.path),
            // user: {
            //   id: service.utilisateur.id,
            //   email: service.utilisateur.username,
            // },
          })),
        };
      },
    }),
    createService: builder.mutation<
      any,
      { name: string; description: string; horaire: string; images?: File[] }
    >({
      invalidatesTags: ["Service"],
      query: (newService) => {
        const formData = new FormData();
        formData.append("nom", newService.name);

        formData.append("description", newService.description);

        formData.append("horaire", newService.horaire);

        newService.images &&
          newService.images?.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
        return {
          url: `services/`,
          method: "POST",
          body: formData,
        };
      },
    }),
    updateService: builder.mutation<
      any,
      {
        id: number;
        name?: string;
        description?: string;
        horaire?: string;
        images?: File[];
      }
    >({
      invalidatesTags: ["Service"],
      query: ({ id, ...updatedFields }) => {
        const formData = new FormData();
        updatedFields.name && formData.append("nom", updatedFields.name);
        updatedFields.description &&
          formData.append("description", updatedFields.description);
        updatedFields.horaire &&
          formData.append("horaire", updatedFields.horaire);

        updatedFields.images &&
          updatedFields.images?.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
        return {
          url: `services/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteService: builder.mutation<any, { id: number }>({
      invalidatesTags: ["Service"],
      query: ({ id }) => ({
        url: `services/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi;
