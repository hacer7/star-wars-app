import { api } from "..";
import { IGetPeopleRequest, IGetPeopleResponse } from "./peopleApi.types";

const peopleApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPeople: build.query<IGetPeopleResponse, IGetPeopleRequest>({
      query: ({page, name}) => ({
        url: "people",
        params: name ? {page, name} : {page}
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetPeopleQuery } = peopleApi;
