import React, { useState } from 'react'
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
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
  const [selectedIndex, setSelectedIndex] = useState<number>()

  const handleCollapse = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1)
    } else {
      setSelectedIndex(index)
    }
  }

  return (
    <>
      {customers ?
        customers.map((customer, index) => (
          <Card key={index} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="avatar" className={classes.avatar}>
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
                onClick={() => { handleCollapse(index) }}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
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
