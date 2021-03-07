import React, { useState }  from 'react';
import _ from 'lodash';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header'
import AddItem from './Components/AddItem'
import ListItem from './Components/ListItem'

const useStyles = makeStyles({
  addItemContainer: {
    marginTop: 5
  },
  listContainer: {
    marginTop: 10
  }
})

const App = () => {
  const classes = useStyles()
  const [items, setItems] = useState([
    { id: 'xay', text: 'Send an email update to the team' },
    { id: 'xq7', text: 'Call the agency to finalize mockups' },
    { id: 'sks', text: 'Meet with the engineering team' },
    { id: 'sks2', text: 'Pay expenses and Electricity' },
    { id: 'sks45', text: 'Call Customer to approval' },
    { id: 'sks455', text: 'Daily planning with DevOps Releases' },
  ]);

  const deleteListItem = (id) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    });
  }

  const addListItem = (text) => {
    if (_.isEmpty(text)) {
      console.log("empty")
    } else {
      setItems(currentItems => {
        return [{ id: getNewID(), text }, ...currentItems]
      })
    }
  }

  const getNewID = () => {
    return Math.random().toString(36).substr(2, 11);
  }

  return (
    <div className="App">
      <Header title="DEMO APP"/>
      <div className={classes.addItemContainer}>
        <AddItem addHandler={addListItem}/>
      </div>
      <div className={classes.listContainer}>
        {items.map(item => (
          <ListItem 
            key={item.id} 
            item={item} 
            deleteHandler={deleteListItem}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
