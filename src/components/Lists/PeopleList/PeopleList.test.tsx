import { render, screen, fireEvent } from '@/utils/test-utils'
import PeopleList from '.'
import { useAppSelector } from '@/store/hooks'
import { useLazyGetPeopleQuery } from '@/api/peopleApi'

jest.mock('../../../api/peopleApi', () => ({
  useLazyGetPeopleQuery: jest.fn(),
}))

jest.mock('../../../store/hooks', () => {
  const actualHooks = jest.requireActual('../../../store/hooks')
  return {
    ...actualHooks,
    useAppSelector: jest.fn(),
  }
})

const mockedUseLazyGetPeopleQuery = useLazyGetPeopleQuery as jest.Mock
const mockedUseAppSelector = useAppSelector as jest.Mock

describe('PeopleList', () => {
  beforeEach(() => {
    mockedUseLazyGetPeopleQuery.mockReset()
    mockedUseAppSelector.mockReset()

    mockedUseAppSelector.mockImplementation((selectorFn) =>
      selectorFn({ search: { searchValue: '' } })
    )
  })

  it('renders loader when loading', () => {
    const mockGetPeople = jest.fn()
    mockedUseLazyGetPeopleQuery.mockReturnValue([
      mockGetPeople,
      { isLoading: true },
    ])

    render(<PeopleList />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders people data when available', () => {
    const mockData = {
      results: [
        { id: 1, name: 'Luke Skywalker' },
        { id: 2, name: 'Darth Vader' },
      ],
      count: 20,
    }
    const mockGetPeople = jest.fn()
    mockedUseLazyGetPeopleQuery.mockReturnValue([
      mockGetPeople,
      { data: mockData, isLoading: false },
    ])

    render(<PeopleList />)

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByText('Darth Vader')).toBeInTheDocument()
  })

  it('pagination updates page', () => {
    const mockGetPeople = jest.fn()
    const mockData = {
      results: [{ id: 1, name: 'Luke Skywalker' }],
      count: 20,
    }

    mockedUseLazyGetPeopleQuery.mockReturnValue([
      mockGetPeople,
      { data: mockData, isLoading: false },
    ])

    render(<PeopleList />)

    const pagination = screen.getByText('2')
    fireEvent.click(pagination)

    expect(mockGetPeople).toHaveBeenCalledWith({ page: 2, search: '' })
  })
})
