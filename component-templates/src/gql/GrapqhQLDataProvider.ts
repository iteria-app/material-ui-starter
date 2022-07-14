import React, { useContext } from 'react'
import {
  IGraphQLDataProvider,
  IFilterProps,
} from '@iteria-app/component-templates-api'

const defaultState: IGraphQLDataProvider = {
  getMany: (entityName: string, filterProps: IFilterProps) => {
    return { data: [], entityFields: { name: 'entityName', fields: [] } }
  },
  getOne: (entityName: string, filterProps: IFilterProps) => {
    return {
      error: {
        error: {
          name: 'networkError',
          message: 'there is error',
          networkError: { name: '', message: '' },
        },
      },
      entityFields: { name: 'entityName', fields: [] },
    }
  },
}

export const DataContext =
  React.createContext<IGraphQLDataProvider>(defaultState)

export const useDataContext = (entityName: string) => {
  const dataContext = useContext(DataContext)
  const upsert = dataContext.upsert(entityName)
  const upsertDisabled = upsert ? false : true

  return {
    getOne: (options: object) => {
      return dataContext.getOne(entityName, options)
    },
    upsert: (value) => {
      return upsert.execute(value)
    },
    upsertDisabled,
  }
}

export const useEntityList = (
  entityName: string,
  filterProps: IFilterProps
) => {
  const dataContext = useContext(DataContext)
  return dataContext.getMany(entityName, filterProps)
}

export const useEntityDetails = (entityName: string, options: object) => {
  const dataContext = useContext(DataContext)
  return dataContext.getOne(entityName, options)
}
