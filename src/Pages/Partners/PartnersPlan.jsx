import React from "react";
import planImg from "../../Assets/Group 4066.png"
const PartnersPlan = () => {
  return (
    <React.Fragment>
      <div className="partner_plans">
        <div className="partner_container">
          <div className="row gy-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="p_left">
                <h2>Best Plans</h2>
                <h1>For your Business</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
                <button className="cus_blue_btn">Work with us</button>

              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="p_right">
                    <img src={planImg} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartnersPlan;
