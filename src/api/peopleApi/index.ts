import { api } from "..";
import { IGetPeopleRequest, IGetPeopleResponse } from "./peopleApi.types";

const peopleApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPeople: build.query<IGetPeopleResponse, IGetPeopleRequest>({
      query: ({page, name__contains}) => ({
        url: "people",
        params: name__contains ? {page, name__contains} : {page}
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetPeopleQuery } = peopleApi;
