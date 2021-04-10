import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Header from './Header';
import allData from '../db.json';
import ReactTimer from './Timer';

const DashBoard = (props) => {
    const classes = useStyles();

    const { processId } = props.location.state;
    const dataObj = JSON.parse(JSON.stringify(allData));
    const processObj = dataObj[processId];
    const [process, setProcess] = useState(processObj);
    const [curr, setCurr] = useState(0);

    useEffect(() => {
            
    })

    const handleDone = (e) => {
        if(curr < Number(process.target)) {
            setCurr(curr+1);
            console.log(curr);
        }
    }

    return (
        <>
            <Header />
            <div className={classes.targetDiv} >
                <div className={classes.targetTxt}>
                    TARGET : {process.target}  
                </div>
            </div>
            <div className={classes.currDiv} >
                <div className={classes.currTxt}>
                    CURRENT : {curr}
                </div>
            </div>
            <div >
                <ReactTimer handleDone={handleDone} curr={curr} />
            </div>
        </>
    )
}

export default DashBoard;

const useStyles = makeStyles((theme) => ({
  targetDiv: {
    "width": "98%",
    "height": "108px",
    "fontFamily": "'Poppins', sans-serif",
    "borderRadius": "6px",
    "marginBottom": "17px",
    "backgroundColor": "gray",
    "fontSize": "45px",
    "color": "white",
    "fontWeight": "bold",
    "paddingLeft": "8px"
  },
  currDiv: {
    "width": "98%",
    "height": "108px",
    "fontFamily": "'Poppins', sans-serif",
    "borderRadius": "6px",
    "marginBottom": "17px",
    "backgroundColor": "gray",
    "fontSize": "50px",
    "color": "white",
    "fontWeight": "bold",
    "paddingLeft": "8px"
  },
  currTxt : {

  }, 
  targetTxt : {

  },
  doneBtn : {
    "height": "150px",
    "fontSize": "55px",
    "backgroundColor": "#1F3A8B",
    "color": "white"
  }
}));