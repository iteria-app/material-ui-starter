import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors
} from '@mui/material'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'

const Sales: React.FC<any> = ({ className, ...rest }) => {
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'This year'
      },
      {
        backgroundColor: colors.grey[300],
        data: [11, 20, 12, 29, 30, 25, 13],
        label: 'Last year'
      }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
  };

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
            fontColor: colors.grey[1000]
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: colors.grey[1000],
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: colors.grey[300],
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: colors.grey[300]
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: colors.grey[500],
      bodyFontColor: colors.grey[50],
      borderColor: colors.grey[300],
      borderWidth: 1,
      enabled: true,
      footerFontColor: colors.grey[50],
      intersect: false,
      mode: 'index',
      titleFontColor: colors.grey[500]
    }
  };

  return (
    <Card {...rest}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDown />} size="small" variant="text">
            Last 7 days
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRight />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
