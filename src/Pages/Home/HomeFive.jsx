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
const HomeFive = () => {
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
              <Link className="form_arrow_link" to="/home-four">
                <img src={arrow} alt="" />
              </Link>
              <div>
                <p>Register with iPurvey</p>
              </div>
            </div>
            <div className="home_form_div_sd">
              <div className="postal_Code">
                <input type="text" placeholder="Postal Code" />
                <button>Find Address</button>
              </div>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Sort Code" />
              <input type="text" placeholder="Account Number" />
              <div className="hoverI_togle">
                <input
                  type="text"
                  placeholder="Alternative Compensation Method"
                />
                <div className="hoverI_togle_img">
                  <img src={hover} alt="..." />
                </div>
              </div>
              <div className="eye_md">
                <input type="password" placeholder="Password" />
                <img src={eye} alt="..." />
              </div>
              <button className="home_form_btn">Sign up</button>
              <div>
                <Link className="form_link">Already a member?Login</Link>
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

export default HomeFive;
