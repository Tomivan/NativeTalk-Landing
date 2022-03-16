import React from 'react';
import Bills from '../../assets/images/bills.png';
import Connected from '../../assets/images/connected.png';
import Experts from '../../assets/images/experts.png';
import Sales from '../../assets/images/sales.png';
import Virtual from '../../assets/images/virtual.png';
import './features.styles.css';

const Features = () => {
    return(
        <div className='features'>
            <h2>Features</h2>
            <div className='right'>
            <div className='cards'>
                <div className='card'>
                    <img src={Virtual} alt="" />
                    <h4>Completely virtual</h4>
                    <p>No need for a new SIM or mobile phone.<br /> 
                    Generate a phone number online, make and<br />
                     receive calls on NativeTalk.</p>
                </div>
                <div className='card'>
                    <img src={Connected} alt="" />
                    <h4>Stay connected always</h4>
                    <p>Collect orders and feedback with NativeTalk’s
                        <br/> autoresponder even when you are offline.</p>
                </div>
                <div className='card'>
                    <img src={Bills} alt="" />
                    <h4>Track your phone bills</h4>
                    <p>Make cheaper calls and track your business<br /> 
                    call expenses at a glance.</p>
                </div>
                <div className='card'>
                    <img src={Experts} alt="" />
                    <h4>Get call insights</h4>
                    <p>Collect and store real-time information with<br /> 
                    the call pop feature during calls.</p>
                </div>
                <div className='card'>
                    <img src={Sales} alt="" />
                    <h4>Manage your sales calls in one place</h4>
                    <p>Add team members to your NativeTalk<br /> 
                    account and receive multiple calls on the<br /> same line at the same time.</p>
                </div>
            </div>
            <button className='create'>Create free account</button>
            </div>
        </div>
    )
}

export default Features;