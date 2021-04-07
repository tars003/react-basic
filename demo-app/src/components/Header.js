import React from 'react';

import logo from '../assets/logo_dr.jpg';

const header = () => {
    return  (
        <>
            <div className="header-logo">
                <img src={logo} ></img>
            </div>
            <div className="header-div">
                PRODUCTION PLANNER LHB
            </div>
        </>
    )
}

export default header;