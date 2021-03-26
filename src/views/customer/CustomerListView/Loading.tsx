import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  makeStyles
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import TableHeader from './CustomerTableHead';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  checkBox: {
    marginLeft: theme.spacing(1.5)
  }
}));

const Loading: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHeader />
            <TableBody>
              {[...Array(8)].map((x, i) =>
                <TableRow key={i}>
                  <TableCell padding="checkbox">
                    <Skeleton variant="rect" width={20} height={20} className={classes.checkBox}></Skeleton>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Skeleton variant="circle" width={40} height={40} className={classes.avatar}><Avatar /></Skeleton>
                      <Skeleton variant="text" width={140}></Skeleton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={140}></Skeleton>
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={140}></Skeleton>
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={140}></Skeleton>
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={140}></Skeleton>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default Loading;