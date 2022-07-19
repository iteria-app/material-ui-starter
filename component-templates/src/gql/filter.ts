import React, { useEffect, useState } from 'react'

export interface IFilterState {
  page: number
  pageSize: number
  countRows: number
  filter?: any
}

export const useFilter = () => {
  const [sort, setSort] = React.useState<object>()
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [filter, setFilter] = useState<object>()
  const offset = page * pageSize - pageSize
  const [countRows, setCountRows] = useState<number>(10)
  useEffect(() => {
    setSort(sort)
  }, [sort])

  const filterProps = {
    filter,
    offset,
    page,
    pageSize,
    countRows,
    sort,
    onSort: (sort: object) => {
      setSort(sort)
    },
    onChangePage: (page: number) => {
      setPage(page)
    },
    onPageSize: (pageSize: number) => {
      setPageSize(pageSize)
    },
    onFilter: (query: object) => {
      setFilter(query)
    },
    setCountToRows: (count) => {
      setCountRows(count)
    },
  }

  return filterProps
}
