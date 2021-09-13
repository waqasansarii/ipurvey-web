import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './Style/Animation.css'
// assets
import train from "../Assets/Group 4050@2x.png";
import airplane from "../Assets/Group 3870@2x.png";
import tree from "../Assets/Group 3848.png";
import road from "../Assets/Group 3975.png";
import sectionLogo from '../Assets/Group 4938.png'
import tick from "../Assets/Path 5449.png";


const AnimationSection = ({ forms }) => {
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
    <div>
      <div className="main_sect_animation_div">
        <div className="animation_content_div">
          {/* home first left section  */}
          <div className="animation_para_div">
            <div className="animatio_head_logo">

            <img src={sectionLogo} alt="..." />
            <h3>Simplifying Travel Claims </h3>
            </div>
            <p>
            iPurvey is streamlining the travel claim process by automatically requesting claims on behalf of passengers in the event of a qualifying disruption. {" "}
            </p>
            <p><strong> No claims forms, no fuss. </strong> With us, you won’t have to lift a finger!</p>
            <div className="ipurvey_points">
              <div className="ip_point">
                <img src={tick} alt="..." />
                <p>Automatic Claims</p>
              </div>
              <div className="ip_point ip_1_point">
                <img src={tick} alt="..." />
                <p>Global Access</p>
              </div>
            </div>
            <div className="ipurvey_points">

              <div className="ip_point">
                <img src={tick} alt="..." />
                <p>Seamless Claims</p>
              </div>
              <div className="ip_point">
                <img src={tick} alt="..." />
                <p>No commission charged on compensation</p>
              </div>
            </div>

          </div>
          <img src={airplane} className="airplane App-logo" alt="..." />
          {/* home first form section  */}
          {forms}
        </div>
        <img className="tree_img" src={tree} alt="..." />
        <div className="station_img">
          <img className="train_img" ref={ref} src={train} alt="..." />
          <img className="road_img" src={road} alt="..." />
        </div>
      </div>
    </div>
  )
}

export default AnimationSection
