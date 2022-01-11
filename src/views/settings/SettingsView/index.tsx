import {
  Box,
  Container,
} from '@mui/material'
import Page from '../../../components/Page'
import Notifications from './Notifications'
import Password from './Password'

const SettingsView = () => {
  return (
    <Page title="Settings">
      <Container maxWidth="lg">
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  );
};

export default SettingsView;
