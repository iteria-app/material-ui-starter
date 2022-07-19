import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Translate } from '../i18n'

interface FetchingError {
  fetching: boolean
  error?: any
}

interface Props {
  queryResponse: FetchingError
  children: JSX.Element
}

const knownError = (errors, callback) => {
  console.log('knownError', errors)
  let title: string
  if (errors?.message?.includes?.('JWTExpired')) {
    title = 'Error loading (expired) - please login'
    callback(true)
  } else if (errors?.message?.includes?.('not found in type')) {
    title = 'Error loading (permissions not set properly)'
  } else {
    title = 'Error loading'
  }

  return {
    title: title,
    body: errors?.message,
  }
}

export const QueryBoundary = (props: Props) => {
  const [tokenExpired, setTokenExpired] = useState<boolean>(false)
  const [textObj, setTextObj] = useState({
    title: 'Something went wrong',
    body: 'Please try agin',
  })
  const navigate = useNavigate()

  useEffect(() => {
    setTokenExpired(false)
    if (props.queryResponse?.error?.networkError) {
      setTextObj({
        title: 'Network Error',
        body: 'There was an error connecting. Please check your internet.',
      })
    } else if (
      props.queryResponse?.error?.name &&
      props.queryResponse?.error?.message
    ) {
      setTextObj(knownError(props.queryResponse?.error, setTokenExpired))
    } else {
      setTextObj({ title: 'Something went wrong', body: 'Please try agin' })
    }
  }, [props.queryResponse?.error])

  const handleLoginButton = () => {
    if (tokenExpired)
      return (
        <Box
          sx={{
            marginTop: '15px',
            textAlign: 'center',
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate('/login')}
          >
            <Translate entityName={'Login'} />
          </Button>
        </Box>
      )
    return <></>
  }

  // if (props.queryResponse?.fetching == true) {
  //   // ;<CircularProgress />
  //   return (
  //     <Box>
  //       <Box
  //         sx={{
  //           margin: 'auto auto auto auto',
  //           width: '50px',
  //           height: '50px',
  //         }}
  //       >
  //         <CircularProgress />
  //       </Box>
  //     </Box>
  //   )
  // }

  if (props.queryResponse?.error) {
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
          {handleLoginButton()}
        </CardContent>
      </Card>
    )
  }

  return props.children
}
