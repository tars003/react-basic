import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


import Header from './Header';
import allData from '../db.json';


const MaterialEntry = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const [options, setOptions] = useState([]);
    
  const { processId } = props.location.state;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    let newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      const newArr = newChecked.filter((material, index) => index !== currentIndex)
      newChecked = newArr
    }

    setChecked(newChecked);
    console.log(checked)
  };

  const handleClick = (e) => {
    console.log(options);
  }

  useEffect(() => {
    const dataObj = JSON.parse(JSON.stringify(allData));
    const process = dataObj[processId];
    // Valid process found
    if (process) {
        setOptions(process.materialGroup);
    } 
    // Valid process not found 
    else {
        console.log('Valid process not found');
    }
  }, []);

  return (
    <>
        <Header />
        <List dense className={classes.root}>
        {options.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
            <ListItem key={value.name} button>
                <ListItemAvatar>
                <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${value.qtyAvailable} of ${value.name}`} />
                <ListItemSecondaryAction>
                <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
                </ListItemSecondaryAction>
            </ListItem>
            );
        })}
        </List>
        <div
            style={{
                position : 'relative',
                textAlign : 'center'
            }} 
        >
            
            <Button 
                variant="contained"
                disabled={checked.length === options.length ? false : true}
                style={{
                    backgroundColor : '#1F3A8B',
                    color: 'white'
                }}
                onClick={handleClick}
            >
                <Link 
                    style={{ color: 'white' }} 
                    to={{
                        pathname : "/dashboard",
                        state: {processId}
                    }}
                >
                    NEXT
                </Link>
            </Button>
        </div>
    </>
  );
}

export default MaterialEntry;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));