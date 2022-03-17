import React from "react";
import Logo from "../../assets/images/Group.png";
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import './footer.styles.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-head">
                <hr className="footer-line"/>
                <img src={Logo} alt=""className="footer-logo"/>
                <hr className="footer-line"/>
            </div>
            <div className="media">
                <img src={Facebook} alt="" className="media-icon"/>
                <img src={Twitter} alt="" className="media-icon"/>
                <img src={Instagram} alt="" className="media-icon"/>
            </div>
            <p>&copy; 2022 Tech4mation LTD</p>
        </div>
    )
}

export default Footer;