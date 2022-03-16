import React from 'react';
import Logo from '../../assets/images/Group.png';
import './signup.styles.css';

const Signup = () => {
    return(
        <div className='sign-up'>
            <nav className='signup-nav'>
                <img src={Logo} alt="" />
            </nav>
            <div className='body'>
                <form>
                    <h2>Create your account</h2>
                    <label>Business Name</label>
                    <input type="text" placeholder="Eze & sons NG LTD" />
                    <label>Full Name</label>
                    <input type="text" placeholder="Eze Michael" />
                    <label>Email address</label>
                    <input type="text" placeholder="Contactmichaeleze@gmail.com" />
                    <label>Country</label>
                    <select>
                        <option>Select Country</option>
                    </select>
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    <p>By clicking create account you agree to our <span>Terms<br /> 
                    and Conditions</span>  and <span>Privacy Statement</span></p>
                    <button className='create'>Create account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;