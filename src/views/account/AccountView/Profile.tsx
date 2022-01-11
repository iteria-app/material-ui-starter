import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const Profile: React.FC<any> = ({ className, ...rest }) => {
  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar src={user.avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
