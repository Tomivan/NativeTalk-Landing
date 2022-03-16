import React from "react";
import './communications.styles.css';
import FloatingPhones from '../../assets/images/smartphone-floating.png';

const Communications = () => {
    return(
        <div className="communications">
            <img src={FloatingPhones} alt="" />
            <h2>Your business communications<br /> just got easier</h2>
            <p>Getting a new SIM is often the first step when starting a business. Due to the hassle, some<br />
             entrepreneurs rely on their personal phone numbers. What if you could get a phone number specially<br /> 
             designed for businesses like yours? That’s why we built NativeTalk.</p>
        </div>
    )
}

export default Communications;