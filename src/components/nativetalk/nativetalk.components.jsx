import React from 'react';
import PhoneFloating from '../../assets/images/phone-floating.png';
import { Link } from "@reach/router" 
import './nativetalk.styles.css';

const NativeTalk = () => {
    return(
        <div className='native-talk'>
            <div className='native-talk-left'>
                <h2>With NativeTalk,</h2>
                <p>you can set up an enterprise-level phone system for your<br /> 
                small business in minutes. </p>
                <button className='create'><Link className="link" to="/signup">Create free account</Link></button>
            </div>
            <div className='native-talk-right'>
                <img src={PhoneFloating} alt="" />
            </div>
        </div>
    )
}

export default NativeTalk;