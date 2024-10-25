import { api } from "..";
import { IFilm } from "./filmsApi.types";

const filmsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFilmById: build.query<IFilm, number>({
      query: (id) => ({
        url: `films/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetFilmByIdQuery } = filmsApi;
