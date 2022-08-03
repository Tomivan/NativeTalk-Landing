import React from "react";
import "./plan.css";

const Plan = () => {
    return(
        <div>
            <h1>Select A Plan</h1>
            <div className="plans">
                <div className="plan">
                    <p>Nativetalk Starter plan</p>
                    <div className="plan-top">
                        <div>
                        <h2>Free</h2>
                        <img src="" alt="" />
                        </div>
                        <p>Get 2 Extensions for free</p>
                    </div>
                    <div className="plan-bottom">
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Auto Receptionist</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Call forwarding</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Call Analytics</p>
                        </div>
                    </div>
                    <button className="select-plan-button">Select</button>
                    <sub>Free service valid for one year</sub>
                </div>
                <div className="plan">
                    <p>Nativetalk Standard</p>
                    <div className="plan-top">
                        <h2>#3000<sub>/mo/user</sub></h2>
                    </div>
                    <div className="plan-bottom">
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Everything in the starter plan plus</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Call recording</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>CRM integration</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>International numbers</p>
                        </div>
                        <div className="plan-row">
                            <img src="" alt="" />
                            <p>Special numbers</p>
                        </div>
                    </div>
                    <button className="select-plan-button">Select</button>
                </div>
            </div>
        </div>
    )
}

export default Plan;