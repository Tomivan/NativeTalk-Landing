import React from 'react';
import Logo from '../../assets/images/Group.png'
import './nav.styles.css';

const Nav = () => {
    return(
        <div className="nav">
            <img src={Logo} alt="The native talk logo" />
            <button className='create'>Create free account</button>
        </div>
    )
}

export default Nav;