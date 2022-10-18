import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors,
  Typography,
} from '@mui/material'
import { Bar } from 'react-chartjs-2'
import { ArrowDropDown } from '@mui/icons-material'
import { Translate, theme, getChartData } from '@iteria-app/component-templates'

export const themeColors = theme?.palette
  ? Object.values(theme.palette)?.filter((color: any) => color?.main)
  : undefined

const options = {
  animation: false,
  cornerRadius: 20,
  layout: { padding: 0 },
  legend: { display: false },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: colors.grey[1000],
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: colors.grey[1000],
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: colors.grey[300],
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: colors.grey[300],
        },
      },
    ],
  },
  tooltips: {
    backgroundColor: 'primary',
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

export interface EntityBarGraphProps {
  data: any
  relationshipName?: string
}

const EntityBarGraph: React.FC<EntityBarGraphProps> = ({
  data,
}) => {
  const graphData = getChartData(data, themeColors)

  return (
    <Card>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDown />} size="small" variant="text">
            Action
          </Button>
        }
        title={<Translate entityName="Entity" />}
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          {graphData ? (
            <Bar data={graphData} options={options} />
          ) : (
            <Typography>No data to display.</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

export default EntityBarGraph
