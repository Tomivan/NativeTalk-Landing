import React from "react";
import './FAQs.styles.css';

const FAQs = () => {
    return(
        <div className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="questions">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is a virtual phone system
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            A virtual phone system, also known as VOIP (voice over internet protocol),<br/> 
                            is a cloud-based phone system that allows you to make and receive calls<br /> 
                            on your phone, laptop and any VoIP device. It allows you to get the<br /> 
                            benefits of your current phone number -make and receive calls - and<br/> 
                            smart features you don’t get with traditional phone service providers like <br /> 
                            call hunting, IVR, call queuing, Voicemail to text transcription and more.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How does NativeTalk work
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            NativeTalk helps businesses set up a cloud-based private phone system, also known<br /> 
                            as private branch exchange (PBX), for internal and external communications. It is<br /> 
                            hosted and powered through the internet instead of the traditional PBX<br /> 
                            that requires expensive hardware and technical specialists. NativeTalk’s CloudPBX is<br /> 
                            affordable, easy to use and can scale with your business. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How does NativeTalk help businesses
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            NativeTalk makes it easy for businesses to experience more than the limited<br /> 
                            features of traditional phone numbers.
                            <li>Separate your business and personal calls</li>
                            <li> Make missed calls and unreachable numbers old news.</li>
                            <li>Enhance your personal brand with customised numbers and business lines that<br/>are hard to forget.</li>       
                            <li>Save labour costs with our virtual receptionists and provide self-service options <br/>  
                            to your customers.</li>
                            <li>And access more exciting features </li>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can I get international numbers on NativeTalk
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            NativeTalk helps businesses set up a cloud-based private phone system, also known<br/> 
                            as private branch exchange (PBX), for internal and external communications. It is<br/> 
                            hosted and powered through the internet instead of the traditional PBX<br /> 
                            that requires expensive hardware and technical specialists. NativeTalk’s CloudPBX is<br /> 
                            affordable, easy to use and can scale with your business. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How much does it cost to use NativeTalk
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            NativeTalk has a free account option that is free forever for two users. All you have<br /> 
                            to do is top-up airtime for your calls (at cheaper rates 😍). Add more users and<br /> 
                            phone extensions at NX. See our simple and transparent pricing here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs;