import * as React from 'react'
import { Card, CardHeader, Typography } from '@mui/material'
import { IError } from '../../gql'
import { CardContent } from '@mui/material'

const ErrorCard: React.FC<IError> = (props: IError) => {
  const textObj = (function () {
    if (props.error.networkError) {
      return {
        title: 'Network Error',
        body: 'There was an error connecting. Please check your internet.',
      }
    }
    if (props.error.name && props.error.message) {
      return { title: props.error.name, body: props.error.message }
    }
    return { title: 'Something went wrong', body: 'Please try agin' }
  })()
  return (
    <Card sx={{ maxWidth: '50%' }}>
      <CardHeader
        sx={{ background: 'crimson', color: 'white' }}
        title={textObj.title}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {textObj.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export const Error: React.FC<IError> = ({ error }: IError) => (
  <ErrorCard error={error} />
)
