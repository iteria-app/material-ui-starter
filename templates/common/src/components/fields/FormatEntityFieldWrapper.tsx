import React from 'react'
import { EntityFragment } from '@iteria-app-mui/data-table/src/generated/graphql'
import { FormatEntityField } from './form/FormatEntityField'
type Props = {
  data: EntityFragment
}
const FormatEntityFieldWrapper = ({ data }: Props) => {
  return data?.FIELD && <FormatEntityField value={data?.FIELD} />
}
export default FormatEntityFieldWrapper
