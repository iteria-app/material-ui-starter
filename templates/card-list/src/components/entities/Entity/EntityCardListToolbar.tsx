import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { FilterProps, Translate } from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
interface ToolbarProps {
  filterProps: FilterProps
}

export const EntityCardListToolbar = ({
  filterProps,
}: ToolbarProps): JSX.Element => {
  const [searchText, setSearchText] = useState('')
  const introspectionOfData = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

  const generateSearchQuery = (
    fieldNames: string[],
    searchText: string
  ) => {
    if (fieldNames.length > 1) {
      return {
        [fieldNames[0]]: generateSearchQuery(fieldNames.splice(1), searchText),
      }
    } else {
      return {
        [fieldNames[0]]: {
          _ilike: `%${searchText}%`,
        },
      }
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let search: any[] | null = null
      if (searchText) {
        introspectionOfData?.forEach((field) => {
          if (
            field?.type?.name === 'String' ||
            field?.type?.ofType?.name === 'String'
          ) {
            if (!search) search = []
            search.push(
              generateSearchQuery(field?.name?.split('.'), searchText)
            )
          }
        })
      }
      filterProps.onFilter(search ? { _or: search } : {})
      filterProps.onChangePage(1)
      filterProps.onPageSize(10)
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  return (
    <Grid
      container
      wrap={'nowrap'}
      justifyContent={'center'}
      style={{ padding: '16px 16px 0' }}
    >
      <Translate entityName={'Search...'}>
        {(value) => (
          <TextField
            variant="outlined"
            value={searchText}
            onChange={(event: { target: { value: string } }) => {
              setSearchText(event.target.value)
            }}
            placeholder={value.toString()}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-input': {
                fontWeight: 400,
                fontSize: '14px',
              },
            }}
          />
        )}
      </Translate>
      <Button sx={{ ml: '10px' }} color="primary" variant="contained">
        <Translate entityName={'Search'} />
      </Button>
    </Grid>
  )
}
