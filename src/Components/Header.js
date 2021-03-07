import React from 'react'
import {AppBar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appbar:{
    background:'#5F9EA0'
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontFamily: 'monospace'
  }
})

const Header = ({title}) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appbar} position='static'>
      <Typography className={classes.title}>{title}</Typography>
    </AppBar>
  )
}

export default Header