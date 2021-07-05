import React from "react";
import { History } from "react-router-dom";
import Cokkie from "../../Components/Cookie";
import WhyIpurvey from "../../Components/HomeComp/WhyIpurvey";
import "./Home.css";
import GetApp from "../../Components/GetApp";
import useWebAnimations from "@wellyshen/use-web-animations";
import ReCAPTCHA from "react-google-recaptcha";
import IpurveySpecial from "../../Components/HomeComp/IpurveySpecial";
import Flights from "../../Components/HomeComp/Flights";
import PaymentMethod from "../../Components/HomeComp/PaymentMethod";
import Trusted from "../../Components/HomeComp/Trusted";
import ChatBox from "../../Components/HomeComp/ChatBox";
import VideoSection from "../../Components/HomeComp/VideoSection";
// assets
import hover from "../../Assets/Component 41 – 1.png";
import trainF from "../../Assets/Group 3465.png";
import checked from "../../Assets/Group 3469.png";
import train from "../../Assets/Group 4050@2x.png";
import airplane from "../../Assets/Group 3870@2x.png";
import tree from "../../Assets/Group 3848.png";
import road from "../../Assets/Group 3975.png";
import arrow from "../../Assets/Icon feather-arrow-rightw.png";
const Home = () => {
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
    <div className="home_container">
      <Cokkie />
      <ChatBox />
      <div className="main_sect_animation_div">
        <div className="animation_content_div">
          {/* home first left section  */}
          <div className="animation_para_div">
            <h3>Simplifying Travel Claims </h3>
            {/* <h1>when we arrive!</h1> */}
            <p>
              Be among the first 100 early members and win iPurvey monitoring
              and raising compensation claim requests for up to 5 (five) Rail
              and/or Flight journeys within the first 2 onths of launch,{" "}
              <strong> completely free!</strong>
            </p>
            <div className="signup_div">
              <button className="cus_blue_btn">Sign up today!</button>
            </div>
          </div>
          <img src={airplane} className="airplane App-logo" alt="" />
          {/* home first form section  */}
          <div className="home_form_div_md">
            <p>
              Would you like your travel claim to be automatically submitted if
              there is a disruption?
            </p>
            <div className="hover_togle_div">
              <p>Retrieve your travel booking</p>
              <div className="hover_togle">
                <img src={hover} alt="..." />
                <div className="hover_i">
                  <h6>Flight:</h6>
                  <p>
                    Air passengers in England and Wales have up to six years
                    from the date of the flight to make a flight compensation
                    claim
                  </p>
                  <div>
                    <h6>Rail</h6>
                    <p>
                      With majority of train companies, claims can be made up to
                      28 days after your journey. Some may allow longer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home_form_div_sd">
              <input type="email" placeholder="Booking reference number" />
              <input type="email" placeholder="Booking reference number" />
              <div className="seleCt_travel_mode">
                <p>Mode of travel</p>
                <div className="slect_tab">
                  <div className="travel_tab">
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      id="box1"
                      name="box"
                    />
                    <label htmlFor="box1" className="tr_tab">
                      <img
                        className="c_dot"
                        style={{ display: "none" }}
                        src={checked}
                        alt="img"
                      />
                      <img src={trainF} alt="..." />
                      <p>Flight</p>
                    </label>
                  </div>
                  <div className="travel_tab">
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      id="box2"
                      name="box"
                    />
                    <label htmlFor="box2" className="tr_tab">
                      <img
                        className="c_dot"
                        style={{ display: "none" }}
                        src={checked}
                        alt="img"
                      />
                      <img src={trainF} alt="..." />
                      <p>Train</p>
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="captcha">
                <ReCAPTCHA
                sitekey="Your client site key"
                onChange={onChange}
                  // size='compact'
                  badge="bottomright"
                  />
                </div> */}
              <button className="home_form_btn">
                Retrieve Booking <img src={arrow} alt="..." />{" "}
              </button>
            </div>
          </div>
        </div>
        <img className="tree_img" src={tree} alt="" />
        <div className="station_img">
          <img className="train_img" ref={ref} src={train} alt="" />
          <img className="road_img" src={road} alt="" />
        </div>
      </div>
      <WhyIpurvey />
      <VideoSection />
      <IpurveySpecial />
      <Flights />
      <PaymentMethod />
      <Trusted />
      <GetApp head="Coming soon on your favorite devices!" para />
    </div>
  );
};

export default Home;
