import React from "react";
import "./reserve.css";

const Reserve = () => {
    return(
        <div>
            <h1>Reserve a number</h1>
            <p>Pick a number from the dropdown below</p>
            <select>
                <option></option>
            </select>
            <button className="continue">Continue</button>
        </div>
    )
}

export default Reserve;