import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors,
} from "@mui/material";
import { InsertChart } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
const TasksProgress: React.FC<any> = ({ className, ...rest }) => {
  return (
    <Card sx={{ height: "100%" }} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <FormattedMessage id="tasks.progress" tagName="span" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              75.5%
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{ bgcolor: colors.orange[600], height: 56, width: 56 }}
              >
                <InsertChart />
              </Avatar>
              <Avatar
                sx={{ bgcolor: colors.orange[600], height: 56, width: 56 }}
              >
                <InsertChart />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress value={75.5} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};
TasksProgress.propTypes = {
  className: PropTypes.string,
};
export default TasksProgress;
