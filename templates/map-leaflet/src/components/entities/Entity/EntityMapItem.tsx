import React from 'react'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import { EntityFragment } from '../../../generated/graphql'
import {Box} from "@mui/material"

export interface IPropsEntityMapItem {
    data: EntityFragment
}

const EntityMapItem: React.FC<IPropsEntityMapItem> = ({ data }) => {
    const columns = [
        <Box key={data?.id}>
            <FormatEntityField value={data?.FIELD} type={'string'} />
        </Box>,
    ]
    return <>{columns}</>
}

export default EntityMapItem
