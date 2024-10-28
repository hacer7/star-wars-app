import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import fetch from 'cross-fetch'; 

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sw-api.starnavi.io/',
    fetchFn: fetch,
  }),

  tagTypes: [],

  refetchOnFocus: true,
  endpoints: () => ({}),
})

api.injectEndpoints({ endpoints: () => ({}) })
