import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://sw-api.starnavi.io/" }),

  tagTypes: [],

  refetchOnFocus: true,
  endpoints: () => ({}),
});

api.injectEndpoints({ endpoints: () => ({}) });
