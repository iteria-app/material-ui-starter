import { Translate } from '@iteria-app/component-templates'
import { useTheme, Box, Typography, Button } from '@mui/material'
import React from 'react'

type LandingButtonProps = {
  onClick: () => void
  text: string
}

export const LandingButton = ({
  onClick,
  text,
}: LandingButtonProps): JSX.Element => {
  return (
    <Button
      sx={{ alignSelf: 'center' }}
      color="primary"
      variant="contained"
      onClick={onClick}
    >
      <Typography>
        <Translate entityName={text} />
      </Typography>
    </Button>
  )
}

export enum Direction {
  Left,
  Right,
}

interface InfoSectionProps {
  childrenDirection: Direction
  buttonSlot?: JSX.Element
  mediaSlot?: JSX.Element
  heading: string
  text: string
}

const InfoSection = ({
  childrenDirection,
  buttonSlot,
  mediaSlot,
  heading,
  text,
}: InfoSectionProps): JSX.Element => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        widht: '100%',
        display: 'flex',
        backgroundColor:
          childrenDirection === Direction.Right
            ? theme.palette.divider
            : 'auto',
        padding: '24px 0px 24px 0px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap:
            childrenDirection === Direction.Left ? 'wrap' : 'wrap-reverse',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {childrenDirection === Direction.Left && mediaSlot}
        <Box sx={{ minWidth: '300px', maxWidth: '50%' }}>
          <Box
            sx={{
              marginBottom: '10px',
            }}
          >
            <Typography variant="h4">
              <Translate entityName={heading} />
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography>
              <Translate entityName={text} />
            </Typography>
          </Box>
          {buttonSlot}
        </Box>
        {childrenDirection === Direction.Right && mediaSlot}
      </Box>
    </Box>
  )
}

export default InfoSection
