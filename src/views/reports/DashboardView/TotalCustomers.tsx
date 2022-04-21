import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
} from "@mui/material";
import { ArrowUpward, People } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
const TotalCustomers: React.FC<any> = ({ className, ...rest }) => {
  return (
    <Card sx={{ height: "100%" }} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <FormattedMessage id="total.customers" tagName="span" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              1,600
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{ bgcolor: colors.green[600], height: 56, width: 56 }}
              >
                <People />
              </Avatar>
              <Avatar
                sx={{ bgcolor: colors.green[600], height: 56, width: 56 }}
              >
                <People />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpward sx={{ color: colors.green[900] }} />
          <Typography sx={{ color: colors.green[900], mr: 2 }} variant="body2">
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
TotalCustomers.propTypes = {
  className: PropTypes.string,
};
export default TotalCustomers;
