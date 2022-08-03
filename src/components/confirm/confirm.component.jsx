import React from "react";
import "./confirm.css";

const Confirm = () => {
    return(
        <div className="">
            <h1>Confirm Your Order</h1>
            <form>
                <label>First and Last Name</label>
                <input type="text" />
                <label>Business Name</label>
                <input type="text" />
                <label>Email Address</label>
                <input type="email" />
                <label>Work Address</label>
                <input type="text" />
                <label>NIN</label>
                <input type="number" />
                <label>Password</label>
                <input type="password" />
            </form>
        </div>
    )
}

export default Confirm;