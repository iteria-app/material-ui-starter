import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'

const Notifications: React.FC<any> = ({ className, ...rest }) => {
  return (
    <form sx={{ height: '100%' }} {...rest}>
      <Card>
        <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid item md={4} sm={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                Notifications
              </Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Push Notifications"
              />
              <FormControlLabel control={<Checkbox />} label="Text Messages" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Phone calls"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                Messages
              </Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Push Notifications"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Phone calls"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
