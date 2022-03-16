import React from "react";
import Logo from "../../assets/images/Group.png";
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import './footer.styles.css';

const Footer = () => {
    return(
        <div className="footer">
            <hr />
            <img src={Logo} alt="" />
            <div className="media">
                <img src={Facebook} alt=""/>
                <img src={Twitter} alt=""/>
                <img src={Instagram} alt="" />
            </div>
            <p>&copy; 2022 Tech4mation LTD</p>
        </div>
    )
}

export default Footer;