import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CustomerCard from './CustomerCard';
import clsx from 'clsx';

import {
  Card
} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';

import { usePaginateCustomersQuery } from '../../generated/graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const CustomerPaginate = () => {
  const paginationStep = 2
  const [first, setFirst] = useState<number>(4)
  const [hasMore, setHasMore] = useState<boolean>(true)

  //cards
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [result] = usePaginateCustomersQuery({ variables: { first: first } })
  const { data, error, fetching } = result

  if (error) return <p>Oh no... {error.message}</p>
  const customers = data?.customer_connection?.edges
  console.log(data?.customer_connection, 'data?.customer_connection');

  const onBottomScroll = () => {
    if (fetching === false) {
      setFirst(first + paginationStep)
      console.log('iss Bottom');
    }
    if (data?.customer_connection?.pageInfo?.hasNextPage === false) {
      setHasMore(false)
    }
    console.log(hasMore, 'hasMore');
  }

  var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };
  console.log(getInitials('FirstName LastName'))

  return (
    <>
      <InfiniteScroll
        dataLength={customers ? customers.length : 0}
        next={onBottomScroll}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableContent"
      >
        <CustomerCard customers={customers}/>
      </InfiniteScroll>
    </>

  )
};

export default CustomerPaginate
