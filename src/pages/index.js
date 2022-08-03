import React from 'react';
import { Router } from "@reach/router";
import Home from './home/home.component';
import Signup from './signup/signup.component';
import SelectAPlan from './Plan/selectPlan.component';
import ConfirmYourOrder from './confirm/confirmOrder.component';

const Pages = () => {
    return(
        <Router className='pages'>
            <Home exact path="/"/>
            <Signup path="/signup"/>
            <SelectAPlan path="/select-a-plan" />
            <ConfirmYourOrder />
        </Router>
    )
}

export default Pages;