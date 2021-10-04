import React from "react";
// assets 
import img1 from '../../Assets/Group 3387.png'
import img2 from '../../Assets/Group 3386.png'
import img3 from '../../Assets/Group 3384.png'
import img4 from '../../Assets/Group 3383.png'

const WhyIpurvey = () => {
  return (
    <div className="why_ipur_container">
      <div className="why_ipur_md">
        <div className="why_ipur_sd">
          <h4>Why Ipurvey?</h4>
          <div className="why_para_describe">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, coaliquyam erat, s
            </p>
          </div>
          <div className="why_ipurvey_steps">
              <div>
                  <img src={img1} alt="..." />
                  <h6>No Paperwork</h6>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
              </div>
              <div>
                  <img src={img2} alt="..." />
                  <h6>Secure Transactions</h6>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
              </div>
              <div>
                  <img src={img3} alt="..." />
                  <h6>Quick and easy</h6>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
              </div>
              <div>
                  <img src={img4} alt="..." />
                  <h6>Seamless Payments</h6>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIpurvey;
