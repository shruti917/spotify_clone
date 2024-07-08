import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.deezer.com/',
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'chart' }),
    getSongsByGenre: builder.query({ query: (genreId) => `genre/${genreId}/artists` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `editorial/${countryCode}/charts` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?q=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artist/${artistId}` }),
    getSongDetails: builder.query({ query: (songId) => `track/${songId}` }),
    getSongRelated: builder.query({ query: (songId) => `track/${songId}/related` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
