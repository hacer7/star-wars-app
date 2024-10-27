import { api } from "..";
import { IGetPeopleRequest, IGetPeopleResponse } from "./peopleApi.types";

const peopleApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPeople: build.query<IGetPeopleResponse, IGetPeopleRequest>({
      query: ({page, search}) => ({
        url: "people",
        params: {page, search}
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetPeopleQuery } = peopleApi;
