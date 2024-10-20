export interface IGetPeopleRequest {
  page: number
  name?: string
}

export interface IGetPeopleResponse {
  count: number
  next: string
  previous: string | null
  results: IPerson[]
}

export interface IPerson {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  url: string;
}
