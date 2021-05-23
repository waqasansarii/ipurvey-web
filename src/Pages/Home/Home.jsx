import React, { useRef } from 'react'
import Cokkie from '../../Components/Cookie'
import './Home.css'
import GetApp from '../../Components/GetApp'
import video from '../../Assets/Group 4941.png'
import train from '../../Assets/Group 4050@2x.png'
import airplane from '../../Assets/Group 3870@2x.png'
import tree from '../../Assets/Group 3848.png'
import road from '../../Assets/Group 3975.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import ReCAPTCHA from "react-google-recaptcha";


const Home = () => {
    // const airplane = useRef('')
    const { ref } = useWebAnimations({
        keyframes: {
            transform: "translateX( -1100px)", // Move by 500px
        },
        animationOptions: {
            delay: 1000, // Start with a 500ms delay
            duration: 5000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },

    });
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className='home_container'>
            <Cokkie />
            <div className="main_sect_animation_div">
                <div className="animation_content_div">
                    <div className="animation_para_div">
                        <h3>Be the first to know </h3>
                        <h3>when we arrive!</h3>
                        <p>Be among the first 100 early members and win iPurvey monitoring and
                        raising compensation claim requests for up to 5 (five) Rail and/or Flight
                       journeys within the first 2 onths of launch, completely free!</p>
                    </div>
                    <img src={airplane} className='airplane App-logo' alt="" />
                    <div className="home_form_div">
                        <h5>Care to share some info?</h5>
                        <form action="">
                            <label htmlFor=""> Email Address <br />
                                <input type="email" placeholder='Email Address' />
                            </label>
                            <label htmlFor="">How did you hear about us?
                                 <select name="" id="">
                                    <option value="">Facebook</option>
                                </select>
                            </label>
                            <label className='check_box' htmlFor="">
                                <input className='check_inp' type="checkbox" name="" id="" />
                                <p className='check_para'>
                                    Send offers & promotional content
                                </p>
                            </label>
                            <div className="captcha">

                            <ReCAPTCHA
                                sitekey="Your client site key"
                                onChange={onChange}
                                // size='compact'
                                 badge='bottomright'
                                />
                                </div>
                            <button className='home_form_btn'>Get Notified</button>
                        </form>
                    </div>
                </div>
                <img className='tree_img' src={tree} alt="" />
                <div className="station_img">
                    <img className='train_img' ref={ref} src={train} alt="" />
                    <img className='road_img' src={road} alt="" />
                </div>
            </div>
            <div className="_home_video_div">
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
                <p>                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                <img src={video} alt="" />
            </div>
            <GetApp head='Coming soon on your favorite devices!' para />
        </div>
    )
}

export default Home
