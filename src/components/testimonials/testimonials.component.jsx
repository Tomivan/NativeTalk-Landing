import React from "react";
import OpenQuote from '../../assets/images/open-quote.png';
import Closequote from '../../assets/images/close-quote.png';
import './testimonials.styles.css'

const Testimonials = () => {
    return(
        <div className="testimonials">
            <img src={OpenQuote} alt="" className="open-quote"/>
            <h2>Testimonials</h2>
            <p>Getting a new SIM is often the first step when starting a business. Due to the hassle,<br />
             some entrepreneurs rely on their personal phone numbers. What if you could get a phone<br /> 
             number specially designed for businesses like yours? That’s why we built NativeTalk.</p>
            <p>Lydia Tech4mation</p>
            <p>Tech4mation LTD</p>
            <img src={Closequote} alt="" className="close-quote"/>
        </div>
    )
}

export default Testimonials;