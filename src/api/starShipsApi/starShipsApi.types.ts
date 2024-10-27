export interface IGetStarShipsRequest {
  pilots__contains: number
  films__in: number[]
}

export interface IGetStarShipsResponse {
  count: number
  next: string
  previous: string
  results: IStarShip[]
}

export interface IStarShip {
  id: number
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: number[]
  films: number[]
  created: string
  edited: string
  url: string
}
