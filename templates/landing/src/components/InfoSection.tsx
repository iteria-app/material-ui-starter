import { useTheme, Box, Typography, Button } from '@mui/material'
import React from 'react'

type LandingButtonProps = {
  onClick: () => void
  text: string
}

const LandingButton = ({ onClick, text }: LandingButtonProps): JSX.Element => {
  return (
    <Button
      sx={{ alignSelf: 'center' }}
      color="primary"
      variant="contained"
      onClick={onClick}
    >
      <Typography>{text}</Typography>
    </Button>
  )
}

export enum Direction {
  Left,
  Right,
}

interface IInfo {
  childrenPlace: Direction
  children: JSX.Element
  button?: {
    onClick: () => void
    text: string
  }
  backgroundColor?: boolean
  heading: string
  text: string
}

const InfoSection = ({
  childrenPlace,
  children,
  button,
  backgroundColor,
  heading,
  text,
}: IInfo): JSX.Element => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        widht: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: backgroundColor ? theme.palette.divider : 'auto',
        paddingTop: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: childrenPlace === Direction.Left ? 'wrap' : 'wrap-reverse',
          flexDirection:
            childrenPlace === Direction.Left ? 'row' : 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {children}
        <Box sx={{ width: '300px' }}>
          <Box
            sx={{
              marginBottom: '10px',
            }}
          >
            <Typography variant="h4">{heading}</Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography>{text}</Typography>
          </Box>
          {button && (
            <LandingButton onClick={button.onClick} text={button.text} />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default InfoSection
