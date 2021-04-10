import React from 'react';

import Timer from 'react-compound-timer';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ReactTimer = ({ handleDone, curr }) => {
    const classes = useStyles();

    return (
        <Timer
            // initialTime={55000}
            startImmediately={true}
            onReset={() => {
                console.log('inside onReset');
                handleDone();
            }}
        >
            {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                <React.Fragment>
                    <div className="mainTimerDiv">
                        <div className={classes.timerDiv}>
                            {/* <Timer.Hours /> hours */}
                            <Timer.Minutes /> {'min  '}
                            <Timer.Seconds /> sec
                        </div>
                        <div className={classes.targetTime}>
                            TARGET TIME : 
                            30 {'min  '}
                        </div>
                    </div>
                    {/* <div> {getTime()}</div> */}
                    <br />
                    <div>
                        <Button 
                            variant="contained" 
                            color="#1F3A8B"
                            onClick={reset}
                            className={classes.doneBtn}
                            fullWidth
                        >
                            {curr >= Number(process.target) ? (
                                'COMPLETE'
                            ) : (
                                'FINISHED'
                            )}
                        </Button>
                    </div>
                </React.Fragment>
            )}
        </Timer>
    )
}

export default ReactTimer;

const useStyles = makeStyles((theme) => ({
  doneBtn : {
    "height": "150px",
    "fontSize": "55px",
    "backgroundColor": "#1F3A8B !important",
    "color": "white"
  },
  timerDiv : {
      "fontSize": "50px",
  "fontFamily": "'Poppins', sans serif",
  "marginLeft": "9px",
  "fontWeight": "bolder"
  },
  targetTime : {
      "fontSize": "33px",
    "fontFamily": "'Poppins', sans serif",
    "marginLeft": "7px",
    "fontWeight": "bolder",
    "marginBottom" : "74px"
  },
  mainTimerDiv : {
    "backgroundColor": "#ff0",
    "borderRadius": "5px"
  }
}));