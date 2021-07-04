import React from "react";
import { Link } from "react-router-dom";
// assets
import img1 from "../../Assets/Group 3350.png";
import img2 from "../../Assets/Group 3351.png";
import img3 from "../../Assets/Group 3355.png";
import bArrow from "../../Assets/Icon feather-arrow-right.png";
import wArrow from "../../Assets/Icon feather-arrow-rightw.png";

const IpurveySpecial = () => {
  return (
    <div className="why_ipur_container">
      <div className="ipurSpecial_md">
        <div className="why_ipur_sd">
          <h4>Why Ipurvey? We got somethings really special!</h4>
          <div className="why_para_describe">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
          </div>
          <div className="ipurveySpecial_steps">
            <div>
              <img src={img1} alt="..." />
              <h6>Feature name</h6>
              <p className="anim_lin"></p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo doloolore mag ipsum dolor sit
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  learn more <img src={bArrow} alt="..." />
                </Link>
              </div>
            </div>
            <div>
              <img src={img2} alt="..." />
              <h6>Feature name</h6>
              <p className="anim_lin"></p>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo doloolore mag ipsum dolor sit
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  learn more <img src={bArrow} alt="..." />
                </Link>
              </div>
            </div>
            <div>
              <img src={img3} alt="..." />
              <h6>Feature name</h6>
              <p className="anim_lin"></p>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo doloolore mag ipsum dolor sit
              </p>
              <div className="learn_more_lin">
                <Link className="link">
                  learn more <img src={bArrow} alt="..." />
                </Link>
              </div>
            </div>
          </div>
          <div className="getstrt_btn">
            <button className="cus_blue_btn">
              Get Started and Enjoy <img src={wArrow} alt="..." />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpurveySpecial;
