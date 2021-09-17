import React from "react";
import getImg from "../../Assets/Group 3387.png";
import rightArrow from "../../Assets/Path 5278.svg";
const PartnerStarted = () => {
  return (
    <React.Fragment>
      <div className="partner_started">
        <div className="started_wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1>How to get Started?</h1>
            </div>
          </div>
          <div className="row gy-2 align-items-center justify-content-center">
            <div className="co-12 col-sm-12 col-md-12 col-lg-3">
              <div className="started_card">
                <img src={getImg} alt="" />
                <h2>Step Title</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="col-lg-1">
              <div className="started_arrow">
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className="co-12 col-sm-12 col-md-12 col-lg-3">
              <div className="started_card">
                <img src={getImg} alt="" />
                <h2>Step Title</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="col-lg-1">
              <div className="started_arrow">
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className="co-12 col-sm-12 col-md-12 col-lg-3">
              <div className="started_card">
                <img src={getImg} alt="" />
                <h2>Step Title</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartnerStarted;
