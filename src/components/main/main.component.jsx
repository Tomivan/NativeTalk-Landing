import React from 'react';
import './main.styles.css';

const Main = () => {
    return(
        <div className="main">
            <h1>Generate a virtual phone number<br /> for your business on NativeTalk</h1>
            <p>Connect with customers in over 60 countries with your NativeTalk virtual phone number.<br />
             Get extra tools to grow your business.</p>
             <div className="pick">
                 <p>Pick a number from the dropdown below</p>
                 <div className='select'>
                 <select>
                     <option>Choose a number</option>
                 </select>
                 <button className='reserve'>Reserve Number</button>
                 </div>
             </div>
        </div>
    )
}

export default Main;