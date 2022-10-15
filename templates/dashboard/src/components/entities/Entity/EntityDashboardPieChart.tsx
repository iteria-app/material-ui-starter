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
  useTheme,
} from '@mui/material'
import { LaptopMac, Phone, Tablet } from '@mui/icons-material'
import {getPieChartData} from "@iteria-app/component-templates"

const EntityDashboardPieChart = ({ data: originalData }: {data: any[]}) => {
  const theme = useTheme()
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
  const icons = [
    Tablet, LaptopMac,  Phone
  ]
  const {data, devices} = getPieChartData(originalData, icons)

  return (
    <Card sx={{ minWidth: '300px' }}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data ?? []} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices?.map(({ color, icon: Icon, title, value }) => (
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

export default EntityDashboardPieChart
