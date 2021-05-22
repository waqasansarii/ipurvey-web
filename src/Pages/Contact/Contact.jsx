import React from 'react'
import aboutRec1 from "../../Assets/Group 3122@2x.png";
import aboutRec2 from '../../Assets/Group 4941.png'
import play from '../../Assets/Polygon 13.png'
import email from '../../Assets/Icon ionic-ios-mail@2x.png'
import path from '../../Assets/Path 4974.png'
import map from '../../Assets/Mask Group 7@2x.png'
import office from '../../Assets/Icon awesome-building@2x.png'
import mob from '../../Assets/Icon ionic-ios-call@2x.png'
import msg from '../../Assets/Group 4946@2x.png'

import './Contact.css'

const Contact = () => {
    return (
        <div className='contact_container'>
            <div className="about_container">
                <div className="about_content">
                    <div className="about_left_content1">
                        <h2 className="main_about_head">We love!</h2>
                        <h2 className=" fw-bold about_head">to hear from you!</h2>
                        <p className="about_para">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                       </p>
                        <p className="about_para">
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolo
                       </p>
                        <div className="email_div">
                            <img src={email} alt="" />
                            <span className='email_span'>contact@ipurvey.com</span>
                        </div>
                    </div>
                    <div className="about_right_content1">
                        <img className='contact_img1' src={aboutRec1} alt="img" />
                    </div>
                </div>
                <div className="contact_section2">

                <div className='about_sec2'>
                    <div className="contact_form_main_div">
                        <div className="contact_video_img">
                            <img src={aboutRec2} alt="img" />

                            <p className='video_desc'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                           </p>
                        </div>
                        <img className='contact_path' src={path} alt="" />
                        <div className="contact_form_sec">
                            <h3>Get in touch!</h3>
                            <form className='contact_form' action="">
                                <div >
                                    <input className='name_inp' type="text" placeholder='First Name' />
                                    <input className='name_inp m_l' type="text" placeholder='Surname' />
                                </div>
                                <div>
                                    <input className='conatact_inp' type="email" placeholder='Email Address' />
                                </div>
                                <div>
                                    <input className='conatact_inp' type="text" placeholder='Subject' />
                                </div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
                                </div>
                                <div>
                                    <button className='contact_send_btn'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                <div className="contact_map_sec">
                    <h3>Our Office</h3>
                    <div className="contact_map_flex d-flex">
                        <img className='map_img' src={map} alt="" />
                        <div className="_contact_links">
                            <h4>Head Office</h4>
                            <div className="addres_div">
                                <img src={office} alt="" />
                                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt</span>
                            </div>
                            <div>
                                <img src={mob} alt="" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                            <div>
                                <img src={msg} alt="" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                            <h4>iPurvey Business Support</h4>
                            <div>
                                <img src={mob} alt="" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                            <h4>Client Support</h4>
                            <div>
                                <img src={mob} alt="" />
                                <span>+1 1234 4567 898</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
