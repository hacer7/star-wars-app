import { api } from "..";
import { IStarShip } from "./starShipsApi.types";

const starShipsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStarShipById: build.query<IStarShip, number>({
      query: (id) => ({
        url: `starships/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetStarShipByIdQuery } = starShipsApi;
