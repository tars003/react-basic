import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Header from './Header';
import allData from '../db.json';

const DashBoard = (props) => {
    const classes = useStyles();
    const { processId } = props.location.state;
    const [process, setProcess] = useState({});

    useEffect(() => {
        const dataObj = JSON.parse(JSON.stringify(allData));
        const process = dataObj[processId];
        // Valid process found
        if (process) {
            setProcess(process);
        } 
        // Valid process not found 
        else {
            console.log('Valid process not found');
        }
    })

    return (
        <>
            <Header />
            <div className={classes.targetDiv} >
                
            </div>
        </>
    )
}

export default DashBoard;

const useStyles = makeStyles((theme) => ({
  targetDiv: {

  },
}));