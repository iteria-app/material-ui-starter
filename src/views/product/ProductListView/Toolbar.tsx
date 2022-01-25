import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Search as SearchIcon } from 'react-feather'

const Toolbar: React.FC<any> = ({ className, ...rest }) => {
  return (
    <div sx={{ height: '100%' }} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button >Import</Button>
        <Button >Export</Button>
        <Button color="primary" variant="contained">
          Add product
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
