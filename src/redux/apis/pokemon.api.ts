import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/",
  }),
  reducerPath: "pokemonApi",
  endpoints: (build) => ({
    getPokemonAbilities: build.query<
      { total: number; abilities: string[] },
      { page: number; perPage: number }
    >({
      query: ({ page, perPage }: { page: number; perPage: number }) => {
        return page === 5
          ? "notfound"
          : `api/v2/ability/?limit=${perPage}&offset=${page}`;
      },
      transformResponse: (response: {
        count: number;
        results: { name: string; url: string }[];
      }) => ({
        total: response.count,
        abilities: response.results.map((ability) => ability.name),
      }),
    }),
  }),
});

export const { useGetPokemonAbilitiesQuery } = pokemonApi;
