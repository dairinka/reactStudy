import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IServerData } from 'types/type';
import { IServerDataResult, IServerDataEpisode } from 'types/type';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCharacters: build.query<IServerDataResult[], string>({
      query: (search: string) => ({
        url: 'character/',
        params: {
          page: 1,
          name: search,
        },
      }),
      transformResponse: (response: IServerData) => {
        return response.results as IServerDataResult[];
      },
    }),
    getPerson: build.query<IServerDataResult, string>({
      query: (id: string) => `character/${id}`,
    }),
    getEpisode: build.query<string, string>({
      query: (id: string) => `episode/${id}`,
      transformResponse: (response: IServerDataEpisode) => {
        return response.name;
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetEpisodeQuery, useGetPersonQuery } = rickandmortyApi;
