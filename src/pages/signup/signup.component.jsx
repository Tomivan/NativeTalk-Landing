import React from 'react';
import Logo from '../../assets/images/Group.png';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './signup.styles.css';

const Signup = () => {
    const {handleSubmit, register, reset } = useForm([]);
    
    function signUp(data) {
        const msg = `Business Name: ${data.businessName}<br />
                     Full Name: ${data.fullName} <br />
                     Email Address: ${data.emailAddress} <br />
                     Country: ${data.country} <br />
                     Password: ${data.password} <br />`
        firebase.firestore().collection("mail").add({to: "bukunmiodugbesans@gmail.com", message:{html:msg, subject:"New User Signup"}})
        .then((response) => {
            reset()
             window.alert("Successfully Saved")
          })
        .catch(
            (error) => {window.alert("Unfortunately, the signup wasn't completed! Please try again.")
            console.log(error)
            })
        
        
    }
    return(
        <div className='sign-up'>
            <nav className='signup-nav'>
                <img src={Logo} alt="" />
            </nav>
            <div className='body'>
                <form onSubmit={handleSubmit(signUp)}>
                    <h2>Create your account</h2>
                    <label>Business Name</label>
                    <input type="text" placeholder="Eze & sons NG LTD" {...register("businessName",{required: true})}/>
                    <label>Full Name</label>
                    <input type="text" placeholder="Eze Michael" name='fullName' {...register("fullName",{required: true})}/>
                    <label>Email address</label>
                    <input type="text" placeholder="Contactmichaeleze@gmail.com" {...register("emailAddress",{required: true})}/>
                    <label>Country</label>
                    <select {...register("country",{required: true})}>
                        <option>Select Country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option  value="Ghana">Ghana</option>
                        <option value="Egypt">Egypt</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Morocco">Morocco</option>
                    </select>
                    <label>Password</label>
                    <input type="password" placeholder="" {...register("password",{required: true})}/>
                    <p>By clicking create account you agree to our <span>Terms<br /> 
                    and Conditions</span>  and <span>Privacy Statement</span></p>
                    <button className='create'>Create account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;