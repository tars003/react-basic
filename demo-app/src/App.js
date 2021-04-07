import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import allData from './db.json';
import InitialEntry from './components/InitialEntry';
import MaterialEntry from './components/MaterialEntry';
import DashBoard from './components/Dashboard';

function App() {

    const [processId, setProcessId] = useState('');
    const [employee, setEmployee] = useState('');

   

    return (
        <Router>
            <Route 
                exact 
                path="/" 
                render={() => (
                    <InitialEntry 
                        employee={employee} 
                        processId={processId} 
                        component={InitialEntry} 
                        setEmployee={setEmployee}
                        setProcessId={setProcessId}
                    />
                )}
            />
            <Route  
                exact
                path="/material-entry"
                render={(props) => (
                    <MaterialEntry {...props} />
                )}
            />
            <Route  
                exact
                path="/dashboard"
                render={(props) => (
                    <DashBoard {...props} />
                )}
            />
        </Router>
    );
}

export default App;
