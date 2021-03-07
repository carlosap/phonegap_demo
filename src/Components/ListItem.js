import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
  container: {
    elevation: 4,
    display: "flex",
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'space-between',
    margin: "4px 15px"
  },
  button: {
    color: '#cc1827'
  },
  text: {
    marginLeft: 7
  }
})

const ListItem = ({item, deleteHandler}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.container} elevation={3}>
      <Typography className={classes.text}>{item.text}</Typography>
      <IconButton 
        className={classes.button} 
        onClick={() => deleteHandler(item.id)}
      >
        <DeleteForeverIcon/>
      </IconButton>
    </Paper>
  )
}

export default ListItem
