'use client'
import Item from './Item'
import { useLazyGetPeopleQuery } from '@/api/peopleApi'
import Loader from '@/components/Loader'
import s from './style.module.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import Pagination from '@mui/material/Pagination'

const PeopleList = () => {
  const [getPeople, { data, isLoading }] = useLazyGetPeopleQuery()

  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const { searchValue } = useAppSelector((state) => state.search)

  useEffect(() => {
    getPeople({ page, search: searchValue })
  }, [page, searchValue])

  if (isLoading) return <Loader />
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {data?.results.map((person) => (
          <Item person={person} key={person.id} />
        ))}
      </div>
      <Pagination
        count={data && Math.ceil(data.count / 10)}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
      />
    </div>
  )
}

export default PeopleList
