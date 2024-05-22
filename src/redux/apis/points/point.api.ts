import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryWithToken } from "../../fetchBase/custom.fetch";

export const reportsApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: "reportApi",
  tagTypes: ["Report"],
  endpoints: (builder) => ({
    getReports: builder.query<
      { reports: any; count: number },
      { animal_id?: number }
    >({
      providesTags: ["Report"],
      query: ({
        animal_id,
        keyword,
      }: {
        animal_id: number;
        keyword?: string;
      }) =>
        keyword
          ? animal_id
            ? `reports/?animal_id=${animal_id}&search=${keyword}`
            : `reports/?search=${keyword}`
          : animal_id
            ? `reports/?animal_id=${animal_id}`
            : `reports/`,
      transformResponse: ({ data, total }: { data: any; total: number }) => {
        return {
          count: total,
          reports: data.map((report: any) => ({
            id: report.id,
            etat: report.etat_animal,
            details: report.detail_etat_animal,
            nourriture: report.type_nourriture,
            grammage: report.quantite_nourriture,
            date: report.date_passage,
            reference: report.reference,
            animal: report.animal,
          })),
        };
      },
    }),
    createReport: builder.mutation<
      any,
      {
        animal: number;
        veterinaire: number;
        etat: string;
        details: string;
        nourriture: string;
        grammage: string;
      }
    >({
      invalidatesTags: ["Report"],
      query: (newReport) => {
        console.log(newReport);
        return {
          url: `reports/`,
          method: "POST",
          body: {
            animal_id: newReport.animal,
            etat_animal: newReport.etat,
            detail_etat_animal: newReport.details,
            type_nourriture: newReport.nourriture,
            quantite_nourriture: newReport.grammage,
            veterinaire_id: newReport.veterinaire,
          },
        };
      },
    }),
  }),
});

export const { useGetReportsQuery, useCreateReportMutation } = reportsApi;
