import {
  createColumnData,
  createFilterData,
  createFilterItem,
  filterByTabName,
  FilterDataStorage,
  FilterProps,
  getColumnsOperandFilterData,
  getFieldValue,
  getOperandForType,
  getTabNameFromIndex,
  getTypeFromField,
  getTypeOfField,
  handleNewDefaultField,
  handleOnChange,
  handleOnChangeSetField,
  useFilter,
} from '@iteria-app/component-templates'
import React, { useEffect } from 'react'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import { EntitiesQuery } from '../../../generated/graphql'
import { useSearchParams } from 'react-router-dom'

type Props = {
  filterCallbacks?: FilterProps
  dataStorage?: FilterDataStorage
}

const EntityFilter = ({ filterCallbacks, dataStorage }: Props) => {
  const [urlParams, setUrlSearchParams] = useSearchParams()
  const currentParams = Object.fromEntries([...(urlParams ?? [])])

  useEffect(() => {
    const realCurrentParams =
      dataStorage === FilterDataStorage.QUERY_PARAMETERS ? currentParams : {}
    const keys = Object.keys(realCurrentParams)
    const filterData = createFilterData(keys, realCurrentParams)
    const columnsData = createColumnData(keys)
    filterCallbacks?.handleToolbarFilter(filterData, columnsData)
  }, [])

  const columns = [
    <>
      <FormatEntityField
        key={'FIELD'}
        name={'FIELD'}
        title={'FIELD'}
        label={'FIELD'}
        relationshipName={undefined}
        value={getFieldValue('FIELD', dataStorage, currentParams)}
        onChange={(event: Event) =>
          handleOnChange(
            'FIELD',
            event,
            dataStorage,
            currentParams,
            filterCallbacks,
            setUrlSearchParams
          )
        }
        setFieldValue={(e) =>
          handleOnChangeSetField(
            'FIELD',
            e,
            undefined,
            dataStorage,
            currentParams,
            filterCallbacks,
            setUrlSearchParams
          )
        }
        onTabsChanged={(e, newValue, value) =>
          filterByTabName(
            'FIELD',
            getTabNameFromIndex(value ?? {}, newValue),
            filterCallbacks ?? useFilter()
          )
        }
      />
    </>,
  ]
  return <>{columns?.map((field) => field)}</>
}

export default EntityFilter
