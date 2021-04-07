import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import '../assets/style.css';

import logo from '../assets/logo_dr.jpg';
import Header from './Header';

import allData from '../db.json';


const Entry = ({ 
    processId, 
    employee, 
    setProcessId, 
    setEmployee
}) => {
    const classes = useStyles();
    const [employees, setEmployees] = useState([]);
    const [isActive, setIsActive] = useState(false);
    
    const handleIdChange = (e) => {
        setProcessId(e.target.value);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setEmployee(e.target.value);
        if (e.target.value) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }

    useEffect(() => {
        const dataObj = JSON.parse(JSON.stringify(allData));
        const process = dataObj[processId];
        // Valid process found
        if (process) {
            // console.log(process.employeeGroup);
            // console.log('helllllo')
            setEmployees(process.employeeGroup);
        } 

    }, [processId]);

    return (
        <>
            <Header />

            <TextField 
                id="outlined-basic" 
                label="Process Id" 
                variant="outlined" 
                value={processId}
                onChange={handleIdChange}
                fullWidth
            />
            <div className="employee-select">
                <FormControl 
                    className={classes.formControl}
                    variant="outlined" 
                    fullWidth
                >
                    <InputLabel id="demo-simple-select-helper-label">Employee </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={employee}
                        onChange={handleChange}
                    >
                        {
                            employees  ? (
                                employees.map((employee) => (
                                    <MenuItem value={employee}>{employee}</MenuItem>
                                ))
                            ) : (
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </div>
            <div
                style={{
                    position : 'relative',
                    textAlign : 'center'
                }} 
            >
                
                <Button 
                    variant="contained"
                    disabled={employee ? false : true}
                    style={{
                        backgroundColor : '#1F3A8B',
                        color: 'white'
                    }}
                >
                    <Link 
                        style={{ color: 'white' }} 
                        to={{
                            pathname : "/material-entry",
                            state: {processId}
                        }}
                    >
                        NEXT
                    </Link>
                </Button>
                    
            </div>
        </>
    )
}

export default Entry;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
