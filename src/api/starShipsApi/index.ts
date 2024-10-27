import { api } from "..";
import { IGetStarShipsRequest, IGetStarShipsResponse, IStarShip } from "./starShipsApi.types";

const starShipsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStarShips: build.query<IStarShip[], IGetStarShipsRequest>({
      query: ({pilots__contains, films__in}) => ({
        url: `starships`,
        params: {pilots__contains, films__in}
      }),
      transformResponse: (response: IGetStarShipsResponse) => response.results
    }),
  }),
  overrideExisting: false,
});

export const { useGetStarShipsQuery } = starShipsApi;
