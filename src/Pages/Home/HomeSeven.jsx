import React from "react";
import { Link } from "react-router-dom";
import Cokkie from "../../Components/Cookie";
import WhyIpurvey from "../../Components/HomeComp/WhyIpurvey";
import "./Home.css";
import GetApp from "../../Components/GetApp";
import useWebAnimations from "@wellyshen/use-web-animations";
import IpurveySpecial from "../../Components/HomeComp/IpurveySpecial";
import Flights from "../../Components/HomeComp/Flights";
import PaymentMethod from "../../Components/HomeComp/PaymentMethod";
import Trusted from "../../Components/HomeComp/Trusted";
import ChatBox from "../../Components/HomeComp/ChatBox";
import VideoSection from "../../Components/HomeComp/VideoSection";
// assets
import hover from "../../Assets/Component 41 – 1.png";
import train from "../../Assets/Group 4050@2x.png";
import airplane from "../../Assets/Group 3870@2x.png";
import tree from "../../Assets/Group 3848.png";
import road from "../../Assets/Group 3975.png";
import eye from "../../Assets/Icon awesome-eye-slash.png";
import arrow from "../../Assets/Icon feather-arrow-right.png";
import fb from "../../Assets/Group 833.png";
import google from "../../Assets/Group 830.png";
const HomeSeven = () => {
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
            <div className="head_md">
              <Link className="form_arrow_link">
                <img src={arrow} alt="" />
              </Link>
              <div>
                <p>We've found a booking!</p>
              </div>
            </div>
            <div className="blue_para">
              <p>Seems like you are already a member!</p>
              <p>
                Please login into your account to see the status of your travel
                disruption!
              </p>
            </div>
            <div className="sign_up_btns">
              <button className="cus_blue_btn">
                <img src={fb} alt="..." /> Login using Facebook
              </button>
            </div>
            <div className="home_form_div_sd">
              <input type="email" placeholder="Booking reference number" />

              <div className="eye_md">
                <input type="email" placeholder="Booking reference number" />
                <img src={eye} alt="..." />
              </div>
              <button className="home_form_btn">Continue</button>
              <div>
                <Link className="form_link">Is this not the booking?</Link>
              </div>
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

export default HomeSeven;
