import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
} from '@mui/material'
import { LaptopMac, Phone, Tablet } from '@mui/icons-material'
import { theme } from '../../../theme'

export const TrafficByDevice = () => {
  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          theme.palette.info.main,
          theme.palette.error.main,
          theme.palette.warning.main,
        ],
        borderWidth: 8,
        borderColor: colors.grey[50],
        hoverBorderColor: colors.grey[50],
      },
    ],
    labels: ['Desktop', 'Tablet', 'Mobile'],
  }

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: colors.grey[500],
      bodyFontColor: colors.grey[50],
      borderColor: colors.grey[300],
      borderWidth: 1,
      enabled: true,
      footerFontColor: colors.grey[50],
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.info.main,
    },
  }

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMac,
      color: theme.palette.info.main,
    },
    {
      title: 'Tablet',
      value: 15,
      icon: Tablet,
      color: theme.palette.error.main,
    },
    {
      title: 'Mobile',
      value: 23,
      icon: Phone,
      color: theme.palette.warning.main,
    },
  ]

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
