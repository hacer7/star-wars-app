import { api } from "..";
import { IFilm, IGetFilmsResponse } from "./filmsApi.types";

const filmsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<IFilm[], number>({
      query: (characters__contains) => ({
        url: `films`,
        params: {characters__contains}
      }),
      transformResponse: (response: IGetFilmsResponse) => response.results
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmsQuery } = filmsApi;
