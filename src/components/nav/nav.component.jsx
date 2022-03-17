import React from 'react';
import Logo from '../../assets/images/Group.png';
import { Link } from "@reach/router";
import './nav.styles.css';

const Nav = () => {
    return(
        <div className="nav">
            <img src={Logo} alt="The native talk logo" />
            <button className='create'><Link className="link" to="/signup">Create free account</Link></button>
        </div>
    )
}

export default Nav;