import React, {useState}  from 'react';
import {Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: "0px 15px",
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: 'grey',
    color: "lightblue",
    borderRadius: 10,
    marginTop: 5,
    fontFamily:'monospace',
    fontSize: 18
  }
})

const AddItem = ({addHandler}) => {
  const classes = useStyles()
  const [text, setText]  = useState('');

  return (
    <div className={classes.container}>
      <TextField
        value={text}
        label="Add new item..."
        onChange={(e) => setText(e.target.value)}
      />
      <Button 
        className={classes.button}
        onClick={() => {
          addHandler(text)
          setText("")
        }}
      >
        Add New Item
      </Button>
    </div>
    

  )
}

export default AddItem