import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { CircularProgress, Grid } from '@mui/material'
import { FilterProps } from '@iteria-app/component-templates'

interface InfiniteScrollingProps {
  filterProps: FilterProps
  data: any
  loadingSkeleton?: ReactNode
  children: ReactNode
}

export const InfiniteScrolling = ({
  filterProps,
  data,
  loadingSkeleton,
  children,
}: InfiniteScrollingProps): JSX.Element => {
  const loader = useRef(null)
  const [loadigMore, setLoadigMore] = useState<boolean | null>(false)
  const [allLoaded, setAllLoaded] = useState(false)

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setLoadigMore((lm) => (lm === false ? true : null))
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  useEffect(() => {
    if (loadigMore && !allLoaded) {
      filterProps.onPageSize(filterProps.pageSize + 10)
    }
  }, [loadigMore])

  useEffect(() => {
    if (!data?.fetching) {
      setLoadigMore(false)
      setAllLoaded(data?.data?.[Object.keys(data?.data)?.[0]]?.length < filterProps.pageSize)
    }
  }, [data])

  return (
    <>
      {children}
      <div ref={loader} />
      {(data?.fetching || !allLoaded) &&
        (loadingSkeleton || (
          <Grid container justifyContent={'center'} padding={'15px'}>
            <CircularProgress />
          </Grid>
        ))}
    </>
  )
}
