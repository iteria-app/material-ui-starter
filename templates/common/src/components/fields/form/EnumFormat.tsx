import React, { FocusEventHandler, ReactNode } from 'react'
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Grid,
} from '@mui/material'
import { getEnumTypes, Translate } from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'

interface EnumFormatProps {
  value: string
  label?: string
  name: string
  onChange?: (event: SelectChangeEvent, child: ReactNode) => void
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const EnumFormat = ({
  value,
  name,
  label,
  onChange,
  onBlur,
}: EnumFormatProps): JSX.Element => (
  <Grid container alignItems={'center'} paddingY={1}>
    <Select
      name={name}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      onClick={(event) => {
        event.stopPropagation()
      }}
      fullWidth
      value={value ?? ''}
    >
      {getEnumTypes(introspection, 'Entity', 'FIELD').map((enumField) => (
        <MenuItem value={enumField} key={enumField}>
          <Translate
            entityName={'Entity'}
            fieldName={`${'FIELD'}.${enumField}`}
            defaultMessage={enumField}
          />
        </MenuItem>
      ))}
    </Select>
  </Grid>
)

// {label && <Typography>{label}: </Typography>}
