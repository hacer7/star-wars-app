import { render, screen, fireEvent } from '@/utils/test-utils'
import ViewPersonModal from '.'
import { IPerson } from '@/api/peopleApi/peopleApi.types'
import { useGetFilmsQuery } from '@/api/filmsApi'
import { useGetStarShipsQuery } from '@/api/starShipsApi'
import { mockReactFlow } from '@/utils/mockReactFlow'

jest.mock('../../../api/filmsApi', () => ({
  useGetFilmsQuery: jest.fn(),
}))

jest.mock('../../../api/starShipsApi', () => ({
  useGetStarShipsQuery: jest.fn(),
}))

const mockHandleClose = jest.fn()

const mockedUseGetFilmsQuery = useGetFilmsQuery as jest.Mock
const mockedUseGetStarShipsQuery = useGetStarShipsQuery as jest.Mock

describe('ViewPersonModal component', () => {
  const mockPerson: IPerson = {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 1,
    films: [1, 2, 3, 6],
    species: [1],
    vehicles: [14, 30],
    starships: [12, 22],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://sw-api.starnavi.io/people/1/',
  }

  beforeEach(() => {
    mockReactFlow()
    jest.clearAllMocks()
  })

  it('renders loading state when films or starships are loading', () => {
    mockedUseGetFilmsQuery.mockReturnValue({
      data: [],
      isLoading: true,
    })

    mockedUseGetStarShipsQuery.mockReturnValue({
      data: [],
      isLoading: false,
    })

    render(
      <ViewPersonModal
        open={true}
        handleClose={mockHandleClose}
        person={mockPerson}
      />
    )

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders the ReactFlow component when data is available', () => {
    const mockFilms = [
      {
        id: 1,
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
        release_date: '1977-05-25',
        characters: [
          10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81,
        ],
        planets: [1, 2, 3],
        starships: [2, 3, 5, 9, 10, 11, 12, 13],
        vehicles: [4, 6, 7, 8],
        species: [1, 2, 3, 4, 5],
        created: '2014-12-10T14:23:31.880000Z',
        edited: '2014-12-20T19:49:45.256000Z',
        url: 'https://sw-api.starnavi.io/films/1/',
      },
    ]
    const mockStarships = [
      {
        id: 12,
        name: 'X-wing',
        model: 'T-65 X-wing',
        manufacturer: 'Incom Corporation',
        cost_in_credits: '149999',
        length: '12.5',
        max_atmosphering_speed: '1050',
        crew: '1',
        passengers: '0',
        cargo_capacity: '110',
        consumables: '1 week',
        hyperdrive_rating: '1.0',
        MGLT: '100',
        starship_class: 'Starfighter',
        pilots: [18, 19, 1, 9],
        films: [1, 2, 3],
        created: '2014-12-12T11:19:05.340000Z',
        edited: '2014-12-20T21:23:49.886000Z',
        url: 'https://sw-api.starnavi.io/starships/12/',
      },
    ]

    mockedUseGetFilmsQuery.mockReturnValue({
      data: mockFilms,
      isLoading: false,
    })
    mockedUseGetStarShipsQuery.mockReturnValue({
      data: mockStarships,
      isLoading: false,
    })

    render(
      <ViewPersonModal
        open={true}
        handleClose={mockHandleClose}
        person={mockPerson}
      />
    )

    expect(screen.getByAltText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByAltText('A New Hope')).toBeInTheDocument()
    expect(screen.getByAltText('X-wing')).toBeInTheDocument()
  })
})
