import React from 'react';
import { Router } from "@reach/router";
import Home from './home/home.component';
import Signup from './signup/signup.component';

const Pages = () => {
    return(
        <Router className='pages'>
            <Home exact path="/"/>
            <Signup path="/signup"/>
        </Router>
    )
}

export default Pages;