import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 40
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

const CustomerCard = ({ customers }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [selectedIndex, setSelectedIndex] = React.useState(-1)


  const handleExpandClick = (index) => {
    // if (index.currentTarget.id === 'panel' + index.currentTarget.value) {
    // if(index.currentTarget.id === "panel0"){
    setExpanded(!expanded);
    // return
    // }
    const value = index.currentTarget.getAttribute("value")
    setIndexValue(value)
    console.log(indexValue, 'indexValue');
    console.log(index.currentTarget.getAttribute("value"), 'index.currentTarget.getAttribute("value")');
    console.log(index, 'event.target.id');
    console.log(index.currentTarget.getAttribute("id"), 'getAttributee.target.id');

  };

  const handleClick = (index) => {
    console.log(index, 'index');
    if (selectedIndex === index) {
      setSelectedIndex(-1)
      // setExpanded(false);
    } else {
      setSelectedIndex(index)
      // setExpanded(true);
    }
  }

  return (
    <>
      {customers ?
        customers.map((customer, index) => (
          <Card key={index} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {getInitials(customer?.node?.name)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={customer?.node?.name}
              subheader={customer.node.address.city}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: index === selectedIndex,
                })}
                onClick={() => { handleClick(index) }}
                aria-expanded={expanded}
                // aria-expanded={index === selectedIndex ? false : true}
                aria-label="show more"
                aria-controls={"panel" + index}
                id={"panel" + index}
                value={index}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
              {/* <Collapse in={indexValue === index ? false : true} timeout="auto" unmountOnExit> */}
              <CardContent>
                <Typography paragraph>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                </Typography>
                <Typography paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                </Typography>
                <Typography paragraph>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))
        :
        null
      }
    </>
  )
};

export default CustomerCard
